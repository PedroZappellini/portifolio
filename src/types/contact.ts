export type ContactType = "idle" | "loading" | "success" | "error";

export interface ContactResponse {
  success: boolean;
  error?: string;
  data?: unknown;
}
