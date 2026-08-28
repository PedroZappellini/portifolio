import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
      return Response.json(
        {
          success: false,
          error: "MISSING_FIELDS",
        },
        { status: 400 },
      );
    }

    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "pedrozappellini@gmail.com",
      replyTo: email,
      subject: `Hello Pedro, i'm ${name}`,
      html: `<p>${message}</p>`,
    });

    if (response.error) {
      return Response.json(
        { success: false, error: "SEND_FAILED" },
        { status: 500 },
      );
    }
    return Response.json(
      { success: true, data: response.data },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return Response.json({ error: "INTERNAL_ERROR" }, { status: 500 });
  }
}
