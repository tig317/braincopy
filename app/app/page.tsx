"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import InputSection from "@/components/input-section"
import ProcessingState from "@/components/processing-state"
import ResultsSection from "@/components/results-section"
import PremiumModal from "@/components/premium-modal"
import Footer from "@/components/footer"
import type { AnalysisResult } from "@/lib/types"

export default function AppPage() {
  const [results, setResults] = useState<AnalysisResult | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isPremiumOpen, setIsPremiumOpen] = useState(false)
  const [isPremium, setIsPremium] = useState(false)
  const [usageCount, setUsageCount] = useState(10)
  const [language, setLanguage] = useState<"en" | "ru">("en")

  useEffect(() => {
    const saved = localStorage.getItem("braincopy-premium")
    const savedLanguage = localStorage.getItem("braincopy-language") as "en" | "ru" | null
    const savedUsage = localStorage.getItem("braincopy-usage")

    if (saved) setIsPremium(JSON.parse(saved))
    if (savedLanguage) setLanguage(savedLanguage)
    if (savedUsage) setUsageCount(Number.parseInt(savedUsage))
  }, [])

  const handlePremiumActivate = () => {
    setIsPremium(true)
    localStorage.setItem("braincopy-premium", "true")
    setIsPremiumOpen(false)
  }

  const handleAnalysis = async (input: string | File, type: "text" | "image") => {
    if (!isPremium && usageCount <= 0) {
      setIsPremiumOpen(true)
      return
    }

    setIsProcessing(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mock results based on input
    const mockResults: AnalysisResult = {
      summary:
        language === "ru"
          ? "Это краткое резюме ваших заметок. Здесь представлены ключевые моменты анализа текста или изображения."
          : "This is a brief overview of your notes. Key concepts and main ideas are highlighted for quick understanding.",
      explanation:
        language === "ru"
          ? "Детальное объяснение содержания. Материал разделен на логические части для лучшего понимания. Каждый раздел содержит подробное описание с примерами и контекстом. Это помогает глубже разобраться в теме и запомнить информацию надолго."
          : "A detailed explanation of the content. The material is broken down into logical sections for better understanding. Each section includes in-depth descriptions with examples and context. This helps you grasp the topic more thoroughly and retain information longer.",
      keyPoints:
        language === "ru"
          ? ["Первый ключевой момент", "Второй ключевой момент", "Третий ключевой момент"]
          : ["First key point", "Second key point", "Third key point"],
      flashcards:
        language === "ru"
          ? [
              { question: "Какое основное определение?", answer: "Определение относится к основному понятию темы" },
              {
                question: "Как это работает?",
                answer: "Это работает через процесс взаимодействия ключевых компонентов",
              },
              { question: "Почему это важно?", answer: "Это важно для понимания основ и применения знаний" },
            ]
          : [
              {
                question: "What is the main definition?",
                answer: "The definition refers to the core concept of the topic",
              },
              { question: "How does it work?", answer: "It works through interaction of key components" },
              {
                question: "Why is this important?",
                answer: "Important for understanding fundamentals and application",
              },
            ],
      quiz:
        language === "ru"
          ? [
              {
                question: "Какой из следующих вариантов правильный?",
                options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г"],
                correct: 1,
              },
              {
                question: "Что из перечисленного является примером?",
                options: ["Пример 1", "Пример 2", "Пример 3", "Пример 4"],
                correct: 2,
              },
              {
                question: "Какое утверждение верно?",
                options: ["Утверждение А", "Утверждение Б", "Утверждение В", "Утверждение Д"],
                correct: 0,
              },
            ]
          : [
              {
                question: "Which of the following is correct?",
                options: ["Option A", "Option B", "Option C", "Option D"],
                correct: 1,
              },
              {
                question: "What is an example of this?",
                options: ["Example 1", "Example 2", "Example 3", "Example 4"],
                correct: 2,
              },
              {
                question: "Which statement is true?",
                options: ["Statement A", "Statement B", "Statement C", "Statement D"],
                correct: 0,
              },
            ],
    }

    setResults(mockResults)
    setIsProcessing(false)

    // Update usage if not premium
    if (!isPremium) {
      const newUsage = usageCount - 1
      setUsageCount(newUsage)
      localStorage.setItem("braincopy-usage", newUsage.toString())
    }
  }

  const handleLanguageChange = (lang: "en" | "ru") => {
    setLanguage(lang)
    localStorage.setItem("braincopy-language", lang)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header
        isPremium={isPremium}
        usageCount={usageCount}
        onPremiumClick={() => setIsPremiumOpen(true)}
        language={language}
        onLanguageChange={handleLanguageChange}
      />

      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {!results && !isProcessing && (
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                {language === "ru" ? "Загрузите заметки или вставьте текст" : "Upload notes or paste text"}
              </h2>
              <p className="text-muted-foreground">
                {language === "ru" ? "Начните учиться эффективнее 📚" : "Start learning smarter 📚"}
              </p>
            </div>
          )}

          {isProcessing ? (
            <ProcessingState language={language} />
          ) : results ? (
            <>
              <button
                onClick={() => setResults(null)}
                className="mb-6 px-4 py-2 text-sm font-medium text-primary hover:bg-muted rounded-lg transition-colors"
              >
                ← {language === "ru" ? "Назад" : "Back"}
              </button>
              <ResultsSection results={results} language={language} />
            </>
          ) : (
            <InputSection onAnalysis={handleAnalysis} language={language} />
          )}
        </div>
      </main>

      <Footer language={language} />

      <PremiumModal
        isOpen={isPremiumOpen}
        onClose={() => setIsPremiumOpen(false)}
        onActivate={handlePremiumActivate}
        language={language}
      />
    </div>
  )
}
