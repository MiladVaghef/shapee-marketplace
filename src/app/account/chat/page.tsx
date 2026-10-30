import type { Metadata } from "next";
import { ChatInbox } from "@/components/account/chat-inbox";
import "./chat.scss";

export const metadata: Metadata = { title: "شاپی | پیام‌ها" };
export default function Page() {
  return <ChatInbox />;
}
