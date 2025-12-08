import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "BrainCopy - AI помощник для учёбы",
  description: "Загрузи конспект — получи объяснения, карточки и тесты",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  )
}