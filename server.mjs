import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";

dotenv.config({ override: true });

const app = express();
const port = Number(process.env.PORT ?? 8787);
const frontendOrigin = process.env.FRONTEND_ORIGIN ?? "http://localhost:5173";
const getEmailConfig = () => ({
  sendgridApiKey: process.env.SENDGRID_API_KEY?.trim(),
  sendgridFromEmail: process.env.SENDGRID_FROM_EMAIL?.trim(),
  sendgridToEmail: process.env.SENDGRID_TO_EMAIL?.trim(),
});

const initialEmailConfig = getEmailConfig();

if (initialEmailConfig.sendgridApiKey) {
  sgMail.setApiKey(initialEmailConfig.sendgridApiKey);
} else {
  console.warn("SENDGRID_API_KEY is missing. /api/contact will fail until it is set.");
}

const missingEnvVars = [
  ["SENDGRID_API_KEY", initialEmailConfig.sendgridApiKey],
  ["SENDGRID_FROM_EMAIL", initialEmailConfig.sendgridFromEmail],
  ["SENDGRID_TO_EMAIL", initialEmailConfig.sendgridToEmail],
]
  .filter(([, value]) => !value)
  .map(([name]) => name);

if (missingEnvVars.length > 0) {
  console.warn(`Missing email env vars: ${missingEnvVars.join(", ")}`);
}

app.use(cors({ origin: frontendOrigin }));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message, agreed } = req.body ?? {};
  const { sendgridApiKey, sendgridFromEmail, sendgridToEmail } = getEmailConfig();

  if (!name || !email || !message || agreed !== true) {
    return res.status(400).json({ ok: false, error: "Invalid request body." });
  }

  if (!sendgridApiKey || !sendgridFromEmail || !sendgridToEmail) {
    return res.status(500).json({
      ok: false,
      error: "Server email configuration is missing.",
    });
  }

  try {
    sgMail.setApiKey(sendgridApiKey);

    const [sgResponse] = await sgMail.send({
      to: sendgridToEmail,
      from: sendgridFromEmail,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nAgreed: ${agreed}\n\nMessage:\n${message}`,
    });

    const messageId = sgResponse?.headers?.["x-message-id"] ?? null;
    const statusCode = sgResponse?.statusCode ?? null;
    console.log(`[contact] SendGrid accepted. status=${statusCode ?? "unknown"} messageId=${messageId ?? "none"}`);

    return res.json({ ok: true, statusCode, messageId });
  } catch (error) {
    console.error("SendGrid send failed:", error?.response?.body ?? error);
    return res.status(500).json({
      ok: false,
      error: "Failed to send email.",
    });
  }
});

app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});
