"use server";

export type ContactState = {
  success: boolean;
  message: string;
} | null;

export async function submitContactForm(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return { success: false, message: "Invalid form data." };
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return { success: false, message: "All fields are required." };
  }

  if (trimmedName.length > 200) {
    return { success: false, message: "Name is too long." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail) || trimmedEmail.length > 320) {
    return { success: false, message: "Please enter a valid email address." };
  }

  if (trimmedMessage.length > 5000) {
    return { success: false, message: "Message is too long (max 5000 characters)." };
  }

  // TODO: Integrate with email service or database
  // For now, simulate a successful submission
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    success: true,
    message: "Thanks for reaching out! We'll get back to you soon.",
  };
}
