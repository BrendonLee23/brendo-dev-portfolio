import { useState } from "react";
import { sendContactEmail } from "@/lib/emailjs";

export function useSendEmail() {
  const [loading, setLoading] = useState(false);

  async function send(data: any) {
    setLoading(true);
    try {
      await sendContactEmail(data);
      setLoading(false);
      return { success: true };
    } catch (error) {
      setLoading(false);
      return { success: false, error };
    }
  }

  return { send, loading };
}