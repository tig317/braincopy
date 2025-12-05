import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
// import TelegramSupportButton from "@/components/ui/TelegramSupportButton"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BrainCopy — AI-учитель для любой учебы",
  description:
    "BrainCopy объясняет любые темы, создаёт конспекты, тесты и карточки. Идеально для школьников, студентов и специалистов. Работает с фото, PDF, текстом. Приватно и быстро.",
  generator: "v0.app",
  keywords: ["AI учитель", "учебные материалы", "конспекты", "тесты", "карточки", "изучение", "образование"],
  authors: [{ name: "BrainCopy" }],
  creator: "BrainCopy",
  publisher: "BrainCopy",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://braincopy.app",
    title: "BrainCopy — AI-учитель для любой учебы",
    description:
      "BrainCopy объясняет любые темы, создаёт конспекты, тесты и карточки. Идеально для школьников, студентов и специалистов. Работает с фото, PDF, текстом. Приватно и быстро.",
    siteName: "BrainCopy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BrainCopy - AI Study Assistant",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrainCopy — AI-учитель для любой учебы",
    description: "BrainCopy объясняет любые темы, создаёт конспекты, тесты и карточки.",
    creator: "@braincopy",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head></head>
      <body className={`font-sans antialiased`}>
        {children}
       {/* <TelegramSupportButton /> */}
        <Analytics />
      </body>
    </html>
  )
}
