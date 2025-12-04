"use client"

import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface PremiumModalProps {
  isOpen: boolean
  onClose: () => void
  onActivate: () => void
  language: "en" | "ru"
}

export default function PremiumModal({ isOpen, onClose, onActivate, language }: PremiumModalProps) {
  const [promoCode, setPromoCode] = useState("")
  const [isValidating, setIsValidating] = useState(false)

  const handleActivate = async () => {
    if (!promoCode) return

    setIsValidating(true)
    // Simulate validation
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsValidating(false)

    onActivate()
    setPromoCode("")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{language === "ru" ? "Активировать Premium" : "Activate Premium Access"}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Promo Code Input */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">
              {language === "ru" ? "Введите промокод" : "Enter promo code"}
            </label>
            <Input
              placeholder={language === "ru" ? "Промокод из Boosty" : "Promo code from Boosty"}
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="font-mono"
            />
          </div>

          {/* Activate Button */}
          <Button
            onClick={handleActivate}
            disabled={!promoCode || isValidating}
            className="w-full gradient-primary text-white disabled:opacity-50"
          >
            {isValidating
              ? language === "ru"
                ? "Проверка..."
                : "Validating..."
              : language === "ru"
                ? "Активировать"
                : "Activate"}
          </Button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background text-muted-foreground">{language === "ru" ? "или" : "or"}</span>
            </div>
          </div>

          {/* Get Premium Link */}
          <a href="https://boosty.to/braincopy" target="_blank" rel="noopener noreferrer" className="block">
            <Button variant="outline" className="w-full group bg-transparent">
              {language === "ru" ? "Получить Premium на Boosty" : "Get Premium on Boosty"}
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </a>

          {/* Info Text */}
          <p className="text-xs text-muted-foreground text-center">
            {language === "ru"
              ? "Получите неограниченный доступ, премиум функции и многое другое"
              : "Get unlimited access, premium features, and much more"}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
