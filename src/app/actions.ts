"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function saveContactMessage(formData: {
  name: string;
  email: string;
  message: string;
}) {
  const parsed = contactSchema.safeParse(formData);

  if (!parsed.success) {
    return { success: false, error: "Invalid form data." };
  }

  try {
    // Here you would typically initialize Firebase and save to Firestore
    // For example:
    // import { db } from '@/lib/firebase';
    // await db.collection('contacts').add({
    //   ...parsed.data,
    //   createdAt: new Date(),
    // });

    console.log("Saving message to Firestore:", parsed.data);

    return { success: true };
  } catch (error) {
    console.error("Error saving message:", error);
    return { success: false, error: "Could not save your message. Please try again later." };
  }
}
