import { sendContactEmail } from "../functions/sendContactEmail";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const message = formData.get("message")?.toString();
    const files = formData.getAll("files") as File[];

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "MISSING_FIELDS" },
        { status: 400 },
      );
    }

    const attachments = await Promise.all(
      files.map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
      })),
    );

    const response = await sendContactEmail({
      name,
      email,
      message,
      attachments,
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
    return Response.json({ error: "INTERNAL_ERROR" });
  }
}
