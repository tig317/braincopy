"use client"

export default function Footer({ language }: { language: "en" | "ru" }) {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>{language === "ru" ? "Сделано с ❤️ BrainCopy · 2025" : "Made with ❤️ by BrainCopy · 2025"}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              {language === "ru" ? "Приватность" : "Privacy"}
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              {language === "ru" ? "Условия" : "Terms"}
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              {language === "ru" ? "Контакты" : "Contact"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
