"use client"

import { Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface HeaderProps {
  isPremium: boolean
  usageCount: number
  onPremiumClick: () => void
  language: "en" | "ru"
  onLanguageChange: (lang: "en" | "ru") => void
}

export default function Header({ isPremium, usageCount, onPremiumClick, language, onLanguageChange }: HeaderProps) {
  const [isSticky, setIsSticky] = useState(false)

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsSticky(window.scrollY > 0)
    })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-foreground hidden sm:inline">BrainCopy</h1>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Language Selector */}
            <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
              <button
                onClick={() => onLanguageChange("ru")}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
                  language === "ru"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                🇷🇺
              </button>
              <button
                onClick={() => onLanguageChange("en")}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
                  language === "en"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                🇬🇧
              </button>
            </div>

            {/* Usage Badge */}
            {!isPremium && (
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                <span className="text-sm font-medium text-muted-foreground">
                  {usageCount} / 10 {language === "ru" ? "осталось" : "left"}
                </span>
              </div>
            )}

            {isPremium && (
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                <span className="text-sm font-medium text-yellow-700 dark:text-yellow-300">
                  {language === "ru" ? "Premium ✓" : "Premium ✓"}
                </span>
              </div>
            )}

            {/* Premium Button */}
            <Button
              onClick={onPremiumClick}
              className="gradient-primary text-white border-0 hover:shadow-lg transition-all"
            >
              {language === "ru" ? "Premium" : "Premium"}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
