import { create } from "zustand";

interface TelegramState {
  loading: boolean;
  error: string | null;
  send: (data: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }) => Promise<boolean>;
}

export const useTelegramStore = create<TelegramState>((set) => ({
  loading: false,
  error: null,
  send: async (data) => {
    set({ loading: true, error: null });

    try {
      const TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
      const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

      if (!TOKEN || !CHAT_ID) {
        throw new Error("Telegram sozlamalari topilmadi");
      }

      const text = `
<b>📩 Yangi xabar:</b>
👤 Ism: ${data.name}
📧 Email: ${data.email}
📱 Telefon: ${data.phone}
📝 Mavzu: ${data.subject}
💬 Xabar: ${data.message}
`;

      const res = await fetch(
        `https://api.telegram.org/bot${TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text,
            parse_mode: "HTML",
          }),
        }
      );

      if (!res.ok) throw new Error("Telegramga yuborilmadi");

      set({ loading: false });
      return true;
    } catch (err: any) {
      set({ loading: false, error: err.message });
      return false;
    }
  },
}));
