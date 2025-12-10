"use client"

import { useState } from 'react'
import Link from 'next/link'
import { 
  Brain, FileText, Sparkles, CheckCircle2, MessageCircle,
  Camera, BookOpen, Users, GraduationCap, Briefcase, 
  ChevronDown, Play, Zap, Lock, Volume2, FolderOpen
} from 'lucide-react'

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              BrainCopy
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link 
              href="/app"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Попробовать бесплатно
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            BrainCopy — твой AI-учитель<br/>для любой учёбы
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Загрузи фото, скриншот, текст или PDF — и получи понятное объяснение, тесты, карточки и краткий конспект. <strong>Даже с кривым почерком!</strong>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link 
              href="/app"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              Попробовать бесплатно →
            </Link>
            <button className="px-8 py-4 bg-white text-gray-900 text-lg font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all flex items-center gap-2">
              <Play className="w-5 h-5" />
              Смотреть демо
            </button>
          </div>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              Бесплатно 5 запросов
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              Без регистрации
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              Полная приватность
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Почему BrainCopy лучше ChatGPT?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Camera className="w-8 h-8 text-blue-600" />}
              title="Разбирает ЛЮБОЙ почерк"
              description="Загрузи фото - даже если писал врач. AI распознает и объяснит."
              badge="🔥 Киллер-фича"
            />
            <FeatureCard 
              icon={<Users className="w-8 h-8 text-purple-600" />}
              title="Подбирает стиль"
              description="Объясняет как учитель, репетитор, одноклассник или быстрая шпаргалка."
            />
            <FeatureCard 
              icon={<Sparkles className="w-8 h-8 text-orange-600" />}
              title="Тесты, карточки, квизы"
              description="Автоматически создаёт тренажёры для подготовки к экзаменам."
            />
            <FeatureCard 
              icon={<Lock className="w-8 h-8 text-green-600" />}
              title="Полная приватность"
              description="Фото обрабатываются прямо в браузере. Никто не увидит твои конспекты."
            />
            <FeatureCard 
              icon={<Volume2 className="w-8 h-8 text-red-600" />}
              title="Голосовые объяснения"
              description="Слушай материал как подкаст - в метро, на прогулке, перед сном."
            />
            <FeatureCard 
              icon={<FolderOpen className="w-8 h-8 text-indigo-600" />}
              title="Личная библиотека"
              description="Все конспекты в одном месте. Работает даже оффлайн."
            />
            <FeatureCard 
              icon={<Zap className="w-8 h-8 text-yellow-600" />}
              title="Мгновенная шпаргалка"
              description="Одним кликом - краткая выжимка для быстрого повторения."
            />
            <FeatureCard 
              icon={<GraduationCap className="w-8 h-8 text-pink-600" />}
              title="Заточен под ЕГЭ/ОГЭ"
              description="Специальные режимы для подготовки к экзаменам и сессии."
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Как это работает?
          </h2>
          <div className="space-y-8">
            <StepCard 
              number="1"
              title="Загрузи фото / PDF"
              description="Сфоткай конспект, страницу учебника или скриншот лекции"
              icon={<Camera className="w-6 h-6" />}
            />
            <StepCard 
              number="2"
              title="AI анализирует материал"
              description="Распознаёт текст и понимает контекст - даже с плохим почерком"
              icon={<Brain className="w-6 h-6" />}
            />
            <StepCard 
              number="3"
              title="Генерирует объяснение"
              description="Простыми словами объясняет тему в выбранном стиле"
              icon={<FileText className="w-6 h-6" />}
            />
            <StepCard 
              number="4"
              title="Создает тренажёры"
              description="Карточки для запоминания, тесты, квизы, шпаргалки"
              icon={<Sparkles className="w-6 h-6" />}
            />
            <StepCard 
              number="5"
              title="Сохраняет в библиотеку"
              description="Всё остаётся с тобой - доступно всегда, даже без интернета"
              icon={<FolderOpen className="w-6 h-6" />}
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Простые и честные цены
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Начни бесплатно. Обновись когда понадобится.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PricingCard 
              name="Бесплатно"
              price="0₽"
              period=""
              features={[
                "5 объяснений в месяц",
                "1 предмет",
                "Без PDF",
                "Базовые карточки",
                "Обычная поддержка"
              ]}
              buttonText="Попробовать"
              buttonLink="/app"
              highlighted={false}
            />
            <PricingCard 
              name="Premium"
              price="299₽"
              period="/месяц"
              features={[
                "Безлимит объяснений",
                "Все предметы",
                "PDF → конспект",
                "Карточки и квизы",
                "Голосовые объяснения",
                "Личная библиотека",
                "Приоритетная поддержка"
              ]}
              buttonText="Оформить подписку"
              buttonLink={process.env.NEXT_PUBLIC_PAY_URL_MONTHLY || "/app"}
              highlighted={true}
              badge="🔥 Популярный"
            />
            <PricingCard 
              name="Plus Add-ons"
              price="249₽"
              period="/7 дней"
              features={[
                "Доступ ко всем функциям",
                "Срок: 7 дней",
                "Можно докупить:",
                "+ Глубокий анализ (29₽)",
                "+ PDF PRO (39₽)",
                "+ Переписать в стиль (19₽)",
                "+ Шпаргалка (25₽)",
                "Без автосписаний"
              ]}
              buttonText="Попробовать 7 дней"
              buttonLink="/app"
              highlighted={false}
            />
            <PricingCard 
              name="Lifetime"
              price="3990₽"
              period="один раз"
              features={[
                "Доступ навсегда",
                "Все функции Premium",
                "Без подписки",
                "Все будущие обновления",
                "VIP поддержка",
                "Ранний доступ к новинкам"
              ]}
              buttonText="Купить навсегда"
              buttonLink={process.env.NEXT_PUBLIC_PAY_URL_LIFETIME || "/app"}
              highlighted={false}
              badge="💎 Лучшее предложение"
            />
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Для кого BrainCopy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AudienceCard 
              icon="🎓"
              title="Школьники"
              description="ЕГЭ, ОГЭ, домашка - всё станет проще"
            />
            <AudienceCard 
              icon="📚"
              title="Студенты"
              description="Сессия, дипломы, курсовые - быстрая помощь"
            />
            <AudienceCard 
              icon="💻"
              title="Люди на курсах"
              description="IT, дизайн, маркетинг - разберём любую тему"
            />
            <AudienceCard 
              icon="💼"
              title="Специалисты"
              description="Быстро вникнуть в новую область или технологию"
            />
            <AudienceCard 
              icon="🚀"
              title="Самоучки"
              description="Учишься сам? BrainCopy - твой персональный ментор"
            />
            <AudienceCard 
              icon="🌍"
              title="Все, кто учится"
              description="Если изучаешь что-то новое - мы поможем"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Частые вопросы
          </h2>
          <div className="space-y-4">
            <FaqItem 
              question="Чем BrainCopy отличается от ChatGPT?"
              answer="BrainCopy заточен под учёбу! Мы распознаём ЛЮБОЙ почерк (даже кривой), создаём карточки и тесты, сохраняем всё в личную библиотеку. ChatGPT - общий инструмент, мы - специализированный учебный помощник."
              isOpen={openFaq === 0}
              onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
            />
            <FaqItem 
              question="Можно ли загружать рукописные фото?"
              answer="Да! Это наша киллер-фича! 🔥 Даже если у тебя почерк как у врача - AI распознает и объяснит. Мы используем продвинутый OCR который понимает контекст."
              isOpen={openFaq === 1}
              onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
            />
            <FaqItem 
              question="Сохраняются ли мои материалы?"
              answer="Да! Все конспекты сохраняются в твоей личной библиотеке. Они доступны даже без интернета (для Premium пользователей). Мы не передаём твои данные третьим лицам."
              isOpen={openFaq === 2}
              onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
            />
            <FaqItem 
              question="Можно ли отменить подписку?"
              answer="Конечно! В любой момент без вопросов. Просто напиши в поддержку или отмени через личный кабинет. Никаких скрытых платежей или сложных отмен."
              isOpen={openFaq === 3}
              onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
            />
            <FaqItem 
              question="Работает ли сервис в России?"
              answer="Да! Мы полностью работаем в РФ. Принимаем оплату российскими картами (Мир, Visa, Mastercard) через ЮKassa. Поддержка на русском языке в Telegram."
              isOpen={openFaq === 4}
              onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Готов учиться эффективнее?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйся к тысячам студентов, которые уже используют BrainCopy
          </p>
          <Link 
            href="/app"
            className="inline-block px-10 py-5 bg-white text-blue-600 text-lg font-bold rounded-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            Попробовать бесплатно →
          </Link>
          <p className="mt-6 text-sm opacity-75">
            5 запросов бесплатно • Без карты • Без регистрации
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">BrainCopy</span>
              </div>
              <p className="text-sm">
                AI-помощник для эффективной учёбы. Сделано с ❤️ для студентов.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/app" className="hover:text-white transition">Попробовать</Link></li>
                <li><Link href="/#pricing" className="hover:text-white transition">Тарифы</Link></li>
                <li><Link href="/#faq" className="hover:text-white transition">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://t.me/braincopy_support" target="_blank" className="hover:text-white transition">Telegram</a></li>
                <li><Link href="#" className="hover:text-white transition">Email</Link></li>
                <li><Link href="#" className="hover:text-white transition">Помощь</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Юридическое</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition">Политика конфиденциальности</Link></li>
                <li><Link href="#" className="hover:text-white transition">Условия использования</Link></li>
                <li><Link href="#" className="hover:text-white transition">Контакты</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2025 BrainCopy. Все права защищены. Сделано в России 🇷🇺</p>
          </div>
        </div>
      </footer>

      {/* Floating Telegram Button */}
      <a
        href="https://t.me/braincopy_support"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#0088cc] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-[99999]"
        aria-label="Telegram поддержка"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>
    </div>
  )
}

// Components
function FeatureCard({ icon, title, description, badge }: any) {
  return (
    <div className="p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
      {badge && (
        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mb-3">
          {badge}
        </span>
      )}
      <div className="w-14 h-14 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function StepCard({ number, title, description, icon }: any) {
  return (
    <div className="flex items-start gap-6 p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
        {number}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-blue-600">{icon}</div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

function PricingCard({ name, price, period, features, buttonText, buttonLink, highlighted, badge }: any) {
  return (
    <div className={`p-8 rounded-2xl border-2 ${highlighted ? 'border-blue-600 shadow-2xl scale-105' : 'border-gray-200'} bg-white transition-all hover:shadow-xl`}>
      {badge && (
        <span className="inline-block px-3 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-semibold rounded-full mb-4">
          {badge}
        </span>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600">{period}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature: string, i: number) => (
          <li key={i} className="flex items-start gap-2 text-gray-700">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Link 
        href={buttonLink}
        className={`block w-full py-3 rounded-xl font-semibold text-center transition-all ${
          highlighted 
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        {buttonText}
      </Link>
    </div>
  )
}

function AudienceCard({ icon, title, description }: any) {
  return (
    <div className="p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all text-center">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

function FaqItem({ question, answer, isOpen, onClick }: any) {
  return (
    <div className="bg-white rounded-xl border-2 border-gray-100 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <span className="text-lg font-semibold text-gray-900 pr-4">{question}</span>
        <ChevronDown className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  )
}