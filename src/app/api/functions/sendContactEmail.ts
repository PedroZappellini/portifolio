import { Resend } from "resend";

interface ContactEmailParams {
  name: string;
  email: string;
  message: string;
  attachments?: { filename: string; content: Buffer }[];
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail({
  name,
  email,
  message,
  attachments,
}: ContactEmailParams) {
  return resend.emails.send({
    from: "onboarding@resend.dev",
    to: "pedrozappellini@gmail.com",
    replyTo: email,
    subject: `Hello Pedro, i'm ${name}`,
    html: `<p>${message}</p>`,
    attachments: attachments,
  });
}
