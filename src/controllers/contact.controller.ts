import { Request, Response } from "express";

export const handleContactRequest = (req: Request, res: Response) => {
  const { name, email, message } = req.body;
  console.log("Contact request received:", { name, email, message });

  // Aquí pondrías la lógica real para enviar email (Nodemailer, SendGrid, etc.)
  res.json({ msg: "Message received. Thank you for contacting me!" });
};
