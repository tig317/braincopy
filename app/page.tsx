"use client"

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import InputSection from '@/components/input-section'
import ProcessingState from '@/components/processing-state'
import ResultsSection from '@/components/results-section'
import PremiumModal from '@/components/premium-modal'
import TelegramSupportButton from '@/components/TelegramSupportButton'
import { ThemeProvider } from '@/components/theme-provider'

export default function Home() {
  const [results, setResults] = useState<any>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isPremiumOpen, setIsPremiumOpen] = useState(false)
  const [isPremium, setIsPremium] = useState(false)
  const [usageCount, setUsageCount] = useState(0)
  const [language, setLanguage] = useState<"en" | "ru">("ru")

  // Загрузка из localStorage
  useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem("braincopy-premium")
      const savedLanguage = localStorage.getItem("braincopy-language") as "en" | "ru" | null
      const savedUsage = localStorage.getItem("braincopy-usage")

      if (saved) setIsPremium(JSON.parse(saved))
      if (savedLanguage) setLanguage(savedLanguage)
      if (savedUsage) setUsageCount(JSON.parse(savedUsage))
    }
  })

  const handleProcess = async (text: string, inputType: 'text' | 'image') => {
    if (!isPremium && usageCount >= 10) {
      alert('Лимит исчерпан! Активируйте премиум.')
      setIsPremiumOpen(true)
      return
    }

    setIsProcessing(true)

    try {
      // Временная заглушка - позже подключим API
      setTimeout(() => {
        setResults({
          summary: 'Краткое содержание вашего текста. AI анализирует ключевые моменты.',
          explanation: 'Подробное объяснение материала. Сейчас это демо-версия.',
          keyPoints: [
            'Первый ключевой момент',
            'Второй важный пункт',
            'Третий главный тезис'
          ],
          flashcards: [
            { question: 'Что такое...?', answer: 'Это...' },
            { question: 'Как работает...?', answer: 'Работает так...' }
          ],
          quiz: [
            {
              question: 'Какой вариант верный?',
              options: ['Вариант А', 'Вариант Б', 'Вариант В', 'Вариант Г'],
              correct: 0
            }
          ]
        })
        setIsProcessing(false)
        
        const newCount = usageCount + 1
        setUsageCount(newCount)
        if (typeof window !== 'undefined') {
          localStorage.setItem('braincopy-usage', JSON.stringify(newCount))
        }
      }, 2000)
    } catch (error) {
      console.error('Error:', error)
      setIsProcessing(false)
      alert('Ошибка обработки')
    }
  }

  const handlePremiumActivate = (code: string) => {
    if (code.toUpperCase().startsWith('PREMIUM')) {
      setIsPremium(true)
      setIsPremiumOpen(false)
      if (typeof window !== 'undefined') {
        localStorage.setItem('braincopy-premium', 'true')
      }
      alert('✨ Премиум активирован!')
    } else {
      alert('❌ Неверный промокод')
    }
  }

  const handleReset = () => {
    setResults(null)
    setIsProcessing(false)
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header 
          isPremium={isPremium}
          usageCount={usageCount}
          onPremiumClick={() => setIsPremiumOpen(true)}
        />

        <main className="flex-1">
          {!results && !isProcessing && (
            <InputSection 
              language={language}
              onLanguageChange={setLanguage}
              onProcess={handleProcess}
            />
          )}

          {isProcessing && <ProcessingState />}

          {results && !isProcessing && (
            <ResultsSection 
              results={results}
              onReset={handleReset}
            />
          )}
        </main>

        <Footer />
        <TelegramSupportButton />

        <PremiumModal 
          isOpen={isPremiumOpen}
          onClose={() => setIsPremiumOpen(false)}
          onActivate={handlePremiumActivate}
        />
      </div>
    </ThemeProvider>
  )
}