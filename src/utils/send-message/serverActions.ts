"use server";
import { sendMail } from "@/utils/send-message/mail";

export async function sendMessageToEmail(text: any) {
  try {
    const message = {
      from: "КАПИТАЛ <capitalgk@mail.ru>",
      to: process.env.RECIPIENT,
      subject: "Вам оставили заявку на сайте!",
      text: text,
    };

    await sendMail(message);
  } catch (e) {
    console.log("Ошибка", e);
  }
}
