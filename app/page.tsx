"use client"

import { useState, useEffect } from 'react'
import { Brain, Upload, FileText, Sparkles, CheckCircle2, Star } from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'upload' | 'text'>('text')
  const [inputText, setInputText] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [results, setResults] = useState<any>(null)
  const [usageCount, setUsageCount] = useState(0)
  const [isPremium, setIsPremium] = useState(false)
  const [showPromoModal, setShowPromoModal] = useState(false)
  const [promoCode, setPromoCode] = useState('')

  useEffect(() => {
    const premium = localStorage.getItem('braincopy_premium')
    const usage = localStorage.getItem('braincopy_usage')
    if (premium) setIsPremium(true)
    if (usage) setUsageCount(parseInt(usage))
  }, [])

  const handleProcess = async () => {
    if (!inputText.trim()) {
      alert('Введите текст для анализа!')
      return
    }

    if (!isPremium && usageCount >= 10) {
      alert('Лимит исчерпан! Активируйте премиум.')
      setShowPromoModal(true)
      return
    }

    setIsProcessing(true)

    setTimeout(() => {
      setResults({
        summary: 'Это краткое содержание вашего текста. AI анализирует ключевые моменты и создаёт понятное объяснение для лучшего понимания материала.',
        explanation: 'Подробное объяснение концепций из вашего текста. Здесь AI разбирает сложные идеи простым языком, чтобы материал был понятен и легко запоминался.',
        keyPoints: [
          'Первый важный момент - основная концепция материала',
          'Второй ключевой пункт для запоминания',
          'Третий главный тезис который стоит выучить'
        ],
        flashcards: [
          { question: 'Что такое основное понятие?', answer: 'Это ключевая идея, которая лежит в основе всей темы и помогает понять остальной материал.' },
          { question: 'Как применяется эта концепция?', answer: 'Концепция применяется в различных областях и помогает решать практические задачи.' },
          { question: 'Почему это важно?', answer: 'Понимание этого помогает глубже разобраться в предмете и успешно применять знания.' }
        ],
        quiz: [
          {
            question: 'Какое утверждение наиболее точно описывает основную идею?',
            options: [
              'Базовое определение концепции',
              'Расширенное понимание с примерами', 
              'Практическое применение в жизни',
              'Теоретический аспект без примеров'
            ],
            correct: 1
          }
        ]
      })

      const newCount = usageCount + 1
      setUsageCount(newCount)
      localStorage.setItem('braincopy_usage', newCount.toString())
      setIsProcessing(false)
    }, 2000)
  }

  const handlePromoActivate = () => {
    if (promoCode.toUpperCase().startsWith('PREMIUM')) {
      setIsPremium(true)
      setShowPromoModal(false)
      localStorage.setItem('braincopy_premium', 'true')
      alert('✨ Премиум активирован!')
      setPromoCode('')
    } else {
      alert('❌ Неверный промокод')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center shadow-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                BrainCopy
              </span>
            </div>
            <div className="flex items-center gap-4">
              {!isPremium && (
                <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
                  <strong>{10 - usageCount}</strong> из 10 осталось
                </span>
              )}
              <button
                onClick={() => setShowPromoModal(true)}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center gap-2"
              >
                {isPremium ? (
                  <>
                    <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                    Премиум
                  </>
                ) : (
                  'Получить премиум'
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!results ? (
          <>
            {/* Hero */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Твой AI-помощник для учёбы 🎓
              </h1>
              <p className="text-xl text-gray-600">
                Загрузи конспект или вставь текст — получи объяснения, карточки и тесты
              </p>
            </div>

            {/* Input Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
              {/* Tabs */}
              <div className="flex gap-4 mb-6 border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('text')}
                  className={`pb-4 px-4 font-medium transition-all relative ${
                    activeTab === 'text'
                      ? 'text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Вставить текст
                  </div>
                  {activeTab === 'text' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('upload')}
                  className={`pb-4 px-4 font-medium transition-all relative ${
                    activeTab === 'upload'
                      ? 'text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Upload className="w-5 h-5" />
                    Загрузить фото
                  </div>
                  {activeTab === 'upload' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                  )}
                </button>
              </div>

              {/* Text Input */}
              {activeTab === 'text' && (
                <div>
                  <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Вставьте текст конспекта, параграф из учебника или любой материал для изучения..."
                    className="w-full h-64 p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-900 placeholder-gray-400"
                  />
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-gray-500">
                      {inputText.length} символов
                    </span>
                    <button
                      onClick={handleProcess}
                      disabled={isProcessing || !inputText.trim()}
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                    >
                      {isProcessing ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Анализирую...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5" />
                          Анализировать с AI
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Upload Area */}
              {activeTab === 'upload' && (
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-16 text-center hover:border-blue-400 transition-colors bg-gray-50">
                  <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4 text-lg">
                    Перетащите изображение или нажмите для выбора
                  </p>
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Выбрать файл
                  </button>
                  <p className="text-sm text-gray-500 mt-4">
                    JPG, PNG, PDF до 10MB
                  </p>
                  <p className="text-xs text-orange-600 mt-2">
                    ⚠️ OCR в разработке - пока используйте текстовый ввод
                  </p>
                </div>
              )}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Краткое содержание</h3>
                <p className="text-gray-600 text-sm">Главные мысли в нескольких предложениях</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Карточки для повторения</h3>
                <p className="text-gray-600 text-sm">Вопрос-ответ для эффективного запоминания</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Тесты для проверки</h3>
                <p className="text-gray-600 text-sm">Проверь понимание материала</p>
              </div>
            </div>
          </>
        ) : (
          /* Results */
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Результаты анализа</h2>
              <button
                onClick={() => setResults(null)}
                className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Новый анализ
              </button>
            </div>

            {/* Summary */}
            <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <FileText className="w-6 h-6 text-blue-600" />
                Краткое содержание
              </h3>
              <p className="text-gray-800 leading-relaxed">{results.summary}</p>
            </div>

            {/* Key Points */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                Ключевые моменты
              </h3>
              <ul className="space-y-3">
                {results.keyPoints.map((point: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explanation */}
            <div className="mb-8 p-6 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Brain className="w-6 h-6 text-purple-600" />
                Подробное объяснение
              </h3>
              <p className="text-gray-800 leading-relaxed">{results.explanation}</p>
            </div>

            {/* Flashcards */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-orange-600" />
                Карточки для запоминания
              </h3>
              <div className="grid gap-4">
                {results.flashcards.map((card: any, idx: number) => (
                  <div key={idx} className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                    <p className="font-semibold text-blue-600 mb-2">Вопрос {idx + 1}:</p>
                    <p className="text-gray-900 mb-3">{card.question}</p>
                    <p className="font-semibold text-green-600 mb-2">Ответ:</p>
                    <p className="text-gray-800">{card.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quiz */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-purple-600" />
                Тест для проверки
              </h3>
              {results.quiz.map((q: any, idx: number) => (
                <div key={idx} className="p-6 bg-purple-50 rounded-xl">
                  <p className="font-semibold text-gray-900 mb-4">{q.question}</p>
                  <div className="space-y-2">
                    {q.options.map((opt: string, optIdx: number) => (
                      <button
                        key={optIdx}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                          optIdx === q.correct
                            ? 'border-green-500 bg-green-50 font-medium'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-green-700">
                    ✓ Правильный ответ: {q.options[q.correct]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Promo Modal */}
      {showPromoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Активировать Премиум ✨
            </h3>
            <p className="text-gray-600 mb-6">
              Введите промокод с Boosty для безлимитного доступа
            </p>
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="PREMIUM-XXXXX"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onKeyPress={(e) => e.key === 'Enter' && handlePromoActivate()}
            />
            <button
              onClick={handlePromoActivate}
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all mb-3"
            >
              Активировать
            </button>
            <div className="text-center mb-4">
              <a
                href="https://boosty.to/braincopy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                Получить промокод на Boosty →
              </a>
            </div>
            <button
              onClick={() => setShowPromoModal(false)}
              className="w-full px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">BrainCopy</span>
          </div>
          <p className="mb-4">Made with ❤️ for students · 2025</p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Политика</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Условия</a>
            <span>·</span>
            <a href="https://t.me/braincopy_support" target="_blank" className="hover:text-white transition-colors">
              Поддержка в Telegram
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}