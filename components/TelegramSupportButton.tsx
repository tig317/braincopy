"use client"

import { Send } from "lucide-react"

export function TelegramSupportButton() {
  return (
    <a
      href="https://t.me/braincopy_support"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[99999] flex items-center justify-center w-15 h-15 rounded-full bg-[#0088cc] text-white shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-110 transform"
      aria-label="Telegram support"
      title="Поддержка в Telegram"
    >
      <Send className="w-6 h-6" />
    </a>
  )
}
