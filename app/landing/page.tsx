"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Brain, FileText, BarChart3, Lock, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Landing() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#4285F4] flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">BrainCopy</span>
          </div>
          <Link href="/app">
            <Button size="sm" className="bg-[#4285F4] hover:bg-[#3367D6] text-white">
              Попробовать бесплатно
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                BrainCopy — твой AI-учитель для любой учебы
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Загрузи фото, скриншот, текст или PDF — и получи понятное объяснение, тесты, карточки и краткий
                конспект. Быстро, просто и понятно.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/app">
                  <Button size="lg" className="w-full sm:w-auto bg-[#4285F4] hover:bg-[#3367D6] text-white">
                    Попробовать бесплатно
                  </Button>
                </Link>
                <button
                  onClick={() => setVideoOpen(true)}
                  className="px-8 py-3 font-medium text-[#4285F4] border-2 border-[#4285F4] rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Смотреть демо
                  <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                </button>
              </div>
            </div>

            {/* AI-style illustration placeholder */}
            <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-[#4285F4] via-blue-400 to-[#667eea] p-8 flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute top-4 left-4 w-24 h-24 bg-white/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-8 right-4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <Brain className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-white font-semibold">AI анализирует твои материалы</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Почему BrainCopy?</h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Всё что нужно для эффективной учёбы в одном приложении
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: FileText,
                title: "Объясняет любую тему",
                desc: "Школа, ВУЗ, курсы, работа. Понимает контекст и объясняет доступно.",
              },
              {
                icon: Zap,
                title: "Подбирает стиль объяснений",
                desc: "Как учитель, репетитор, одноклассник. Быстро или подробно — как нужно.",
              },
              {
                icon: BarChart3,
                title: "Создает тесты, карточки, квизы",
                desc: "Идеально для подготовки к экзаменам и закрепления материала.",
              },
              {
                icon: Lock,
                title: "Полная приватность",
                desc: "Фото обрабатываются прямо в браузере. Твои данные только твои.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <feature.icon className="w-8 h-8 text-[#4285F4] mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Как это работает</h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Пять простых шагов до готового контента для учёбы
          </p>

          <div className="grid md:grid-cols-5 gap-4 md:gap-2">
            {[
              { step: 1, title: "Загрузи фото/PDF", icon: "📸" },
              { step: 2, title: "AI анализирует материал", icon: "🧠" },
              { step: 3, title: "Генерирует объяснение", icon: "✍️" },
              { step: 4, title: "Создает тренажёры", icon: "🎯" },
              { step: 5, title: "Сохраняет в библиотеку", icon: "💾" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#4285F4] text-white font-bold text-xl flex items-center justify-center mb-4 flex-shrink-0">
                  {item.step}
                </div>
                {i < 4 && (
                  <div className="hidden md:block absolute w-12 h-1 bg-gradient-to-r from-[#4285F4] to-transparent ml-[72px]" />
                )}
                <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                <span className="text-2xl mt-2">{item.icon}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Тарифы</h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Выберите подходящий план для ваших потребностей
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 flex flex-col hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 rounded-full bg-green-400" />
                <h3 className="text-2xl font-bold text-gray-900">Бесплатно</h3>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {["5 объяснений в месяц", "1 предмет", "Без PDF"].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/app">
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-6 rounded-lg">
                  Попробовать бесплатно
                </Button>
              </Link>
            </div>

            {/* Plus Add-ons Plan */}
            <div className="bg-white rounded-2xl border-2 border-orange-300 p-8 flex flex-col hover:shadow-lg transition-shadow relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">🔥 ХИТ</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 rounded-full bg-orange-500" />
                <h3 className="text-2xl font-bold text-gray-900">Plus Add-ons</h3>
              </div>
              <div className="mb-6">
                <p className="text-4xl font-bold text-gray-900">
                  149 ₽<span className="text-lg text-gray-600 font-normal"> разово</span>
                </p>
                <p className="text-sm text-gray-500 mt-2">Доступ на 7 дней</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {["Все Premium-функции", "Голосовые объяснения", "Докупаемые аддоны", "Без автоподписки"].map(
                  (feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ),
                )}
              </ul>

              {/* Add-ons List */}
              <div className="mb-8 pb-6 border-t border-gray-200">
                <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Доступные аддоны:</p>
                <ul className="space-y-2 text-xs text-gray-700">
                  {[
                    "Deep Understanding — 29₽",
                    "PDF-конспект PRO — 39₽",
                    "Переписать в стиль ученика — 19₽",
                    "Генерация шпаргалки — 25₽",
                  ].map((addon, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                      {addon}
                    </li>
                  ))}
                </ul>
              </div>

              <a href={process.env.NEXT_PUBLIC_PAY_URL_MONTHLY || "#"} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-6 rounded-lg">
                  Попробовать сейчас
                </Button>
              </a>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-2xl border-2 border-[#4285F4] p-8 flex flex-col shadow-lg ring-1 ring-[#4285F4]/10 hover:shadow-xl transition-shadow relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="bg-[#4285F4] text-white px-4 py-1 rounded-full text-sm font-semibold">Популярно</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 rounded-full bg-blue-500" />
                <h3 className="text-2xl font-bold text-gray-900">Premium</h3>
              </div>
              <div className="mb-6">
                <p className="text-4xl font-bold text-gray-900">
                  299 ₽<span className="text-lg text-gray-600 font-normal">/месяц</span>
                </p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "Безлимит объяснений",
                  "Все предметы",
                  "PDF → конспект",
                  "Карточки и квизы",
                  "Голосовые объяснения",
                  "Личная библиотека",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#4285F4] mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={process.env.NEXT_PUBLIC_PAY_URL_MONTHLY || "#"} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gradient-to-r from-[#4285F4] to-[#667eea] hover:from-[#3367D6] hover:to-[#5566d1] text-white font-semibold py-6 rounded-lg">
                  Оформить подписку
                </Button>
              </a>
            </div>

            {/* Lifetime Plan */}
            <div className="bg-white rounded-2xl border-2 border-purple-300 p-8 flex flex-col hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 rounded-full bg-purple-500" />
                <h3 className="text-2xl font-bold text-gray-900">Lifetime</h3>
              </div>
              <div className="mb-6">
                <p className="text-4xl font-bold text-gray-900">
                  3990 ₽<span className="text-lg text-gray-600 font-normal"> один раз</span>
                </p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "Доступ навсегда",
                  "Все функции Premium",
                  "Без подписки",
                  "Голосовые объяснения",
                  "Приоритетная поддержка",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={process.env.NEXT_PUBLIC_PAY_URL_LIFETIME || "#"} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-6 rounded-lg">
                  Купить навсегда
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Для кого BrainCopy?</h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Подходит для любого, кто хочет учиться эффективнее
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "👨‍🎓 Школьники",
              "🎓 Студенты",
              "📖 Люди на курсах",
              "💼 Специалисты, которым нужно быстро понять тему",
              "🚀 Самоучки",
              "🌍 И все, кто хочет учиться эффективнее",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 hover:border-[#4285F4] transition-colors"
              >
                <p className="text-gray-900 font-medium text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Часто задаваемые вопросы</h2>
          <p className="text-lg text-gray-600 text-center mb-12">Ответы на вопросы, которые вас интересуют</p>

          <Accordion type="single" collapsible className="space-y-3">
            {[
              {
                q: "Чем BrainCopy отличается от ChatGPT?",
                a: "BrainCopy специализирован на обучении. Он не только объясняет, но и создает тесты, карточки и квизы для закрепления материала. Плюс встроенная OCR для фото и PDF - просто загрузи материал.",
              },
              {
                q: "Можно ли загружать рукописные фото?",
                a: "Да, BrainCopy хорошо распознает рукописный текст на фото. Загружай фотографии страниц с рукописью, и AI разберется.",
              },
              {
                q: "Сохраняются ли мои материалы?",
                a: "В бесплатной версии материалы не сохраняются между сессиями. С Premium вы получаете личную библиотеку всех ваших анализов с полной историей.",
              },
              {
                q: "Можно ли отменить подписку?",
                a: "Да, подписку можно отменить в любой момент прямо в приложении. Деньги за полные месяцы не будут возвращены, но остаток периода остается активным.",
              },
              {
                q: "Работает ли сервис в России?",
                a: "Да, BrainCopy работает в России и других странах. Все данные обрабатываются с соблюдением локального законодательства.",
              },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-gray-200 rounded-lg px-4">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-[#4285F4] py-4">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#4285F4] to-[#667eea] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Готов начать учиться эффективнее?</h2>
          <p className="text-lg mb-8 opacity-90">10 бесплатных анализов, чтобы попробовать всё</p>
          <Link href="/app">
            <Button size="lg" className="bg-white text-[#4285F4] hover:bg-gray-100 font-semibold">
              Попробовать бесплатно
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-8 pb-8 border-b border-gray-800">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#4285F4] flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">BrainCopy</span>
              </div>
              <p className="text-sm">Твой AI-учитель для любой учебы</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-white font-semibold mb-4">Ссылки</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Политика конфиденциальности
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Условия использования
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Поддержка</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="https://t.me/YourSupportBotOrChannel"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="hover:text-white transition-colors"
                    >
                      Telegram поддержка
                    </a>
                  </li>
                  <li>
                    <a href="mailto:contact@braincopy.com" className="hover:text-white transition-colors">
                      Контакты
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center text-sm">
            <p>Made with ❤️ by BrainCopy · 2025</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
