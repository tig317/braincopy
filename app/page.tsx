"use client"

import { useState } from 'react'
import Link from 'next/link'
import { 
  Brain, FileText, Sparkles, CheckCircle2, MessageCircle,
  Camera, BookOpen, Users, GraduationCap, Target, 
  ChevronDown, Play, Zap, Lock, Volume2, TrendingUp,
  Calendar, Award, Mic, BarChart3
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
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-semibold text-sm mb-6">
            🔥 Не просто AI — твой персональный репетитор!
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Понимай темы.<br/>Сдавай экзамены.<br/>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Получай пятёрки.
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            BrainCopy — это <strong>НЕ просто ChatGPT</strong>. Это твой AI-репетитор, который <strong>объясняет</strong>, <strong>готовит к экзаменам</strong> и <strong>помогает выучить</strong> любую тему. Даже с кривым почерком!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link 
              href="/app"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Начать учиться бесплатно
            </Link>
            <button className="px-8 py-4 bg-white text-gray-900 text-lg font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all flex items-center gap-2">
              <Play className="w-5 h-5" />
              Посмотреть как работает
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-sm">
            <div className="flex items-center justify-center gap-2 text-gray-700 bg-white p-4 rounded-xl shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span><strong>5 объяснений</strong> бесплатно</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-700 bg-white p-4 rounded-xl shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span><strong>Без регистрации</strong></span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-700 bg-white p-4 rounded-xl shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span><strong>Результат за 30 сек</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20 px-4 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Знакомые проблемы? 😫
            </h2>
            <p className="text-xl text-gray-600">
              Мы их решаем! 👇
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <ProblemSolutionCard 
              problem="❌ Не понимаю тему из учебника"
              solution="✅ AI объясняет простыми словами + примеры из жизни"
              icon={<FileText className="w-6 h-6 text-red-600" />}
            />
            <ProblemSolutionCard 
              problem="❌ Завтра тест, нужно срочно выучить"
              solution="✅ Мгновенная шпаргалка + карточки для повторения"
              icon={<Zap className="w-6 h-6 text-orange-600" />}
            />
            <ProblemSolutionCard 
              problem="❌ Готовлюсь к ЕГЭ/ОГЭ - не знаю с чего начать"
              solution="✅ Режим 'Экзамен' - план подготовки + мок-тесты"
              icon={<Target className="w-6 h-6 text-blue-600" />}
            />
            <ProblemSolutionCard 
              problem="❌ Конспекты криво написаны - сам не разбираю"
              solution="✅ Распознаём ЛЮБОЙ почерк + исправляем опечатки"
              icon={<Camera className="w-6 h-6 text-green-600" />}
            />
          </div>
        </div>
      </section>

      {/* Unique Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-semibold text-sm mb-4">
              🎯 Наша суперсила
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Что умеет BrainCopy, чего НЕТ в ChatGPT?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы не просто отвечаем на вопросы. Мы <strong>учим</strong>, <strong>тренируем</strong> и <strong>готовим к экзаменам</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <UniqueFeatureCard 
              icon={<Target className="w-8 h-8 text-blue-600" />}
              title="Режим 'Подготовка к экзамену'"
              description="Загружаешь темы → AI создаёт план повторения на каждый день + мок-тесты в формате ЕГЭ/ОГЭ"
              badge="🔥"
            />
            <UniqueFeatureCard 
              icon={<Users className="w-8 h-8 text-purple-600" />}
              title="'Объясни как для дурака'"
              description="AI подбирает аналогии из жизни, примеры на простых вещах, мемы для запоминания"
              badge="😎"
            />
            <UniqueFeatureCard 
              icon={<Zap className="w-8 h-8 text-orange-600" />}
              title="Шпаргалка за 30 секунд"
              description="Мгновенная выжимка самого важного в формате А4 - можно распечатать перед контрольной"
              badge="⚡"
            />
            <UniqueFeatureCard 
              icon={<Users className="w-8 h-8 text-green-600" />}
              title="Групповой режим"
              description="Создай комнату для класса - все загружают материалы, квиз-батлы, рейтинг кто больше выучил"
              badge="👥"
            />
            <UniqueFeatureCard 
              icon={<Mic className="w-8 h-8 text-red-600" />}
              title="Голосовой опрос"
              description="AI задаёт вопросы голосом, ты отвечаешь голосом - проверка знаний в режиме диалога"
              badge="🎤"
            />
            <UniqueFeatureCard 
              icon={<BarChart3 className="w-8 h-8 text-indigo-600" />}
              title="Анализ слабых мест"
              description="AI видит где ты ошибаешься, предлагает доп. материалы и персональный план обучения"
              badge="📊"
            />
            <UniqueFeatureCard 
              icon={<Calendar className="w-8 h-8 text-pink-600" />}
              title="Планировщик повторений"
              description="Система интервальных повторений - напоминает когда пора повторить тему"
              badge="📅"
            />
            <UniqueFeatureCard 
              icon={<Award className="w-8 h-8 text-yellow-600" />}
              title="Геймификация"
              description="Получай ачивки за выученные темы, соревнуйся с друзьями, открывай новые уровни"
              badge="🏆"
            />
            <UniqueFeatureCard 
              icon={<TrendingUp className="w-8 h-8 text-cyan-600" />}
              title="Трекинг прогресса"
              description="Графики успеваемости, статистика по темам, предсказание оценки на экзамене"
              badge="📈"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Как начать учиться с BrainCopy?
          </h2>
          <div className="space-y-8">
            <StepCard 
              number="1"
              title="Загрузи материал"
              description="Сфоткай конспект, страницу учебника, PDF или просто вставь текст"
              icon={<Camera className="w-6 h-6" />}
            />
            <StepCard 
              number="2"
              title="Выбери режим обучения"
              description="'Объяснить тему' / 'Подготовка к экзамену' / 'Быстрая шпаргалка' / 'Карточки'"
              icon={<Target className="w-6 h-6" />}
            />
            <StepCard 
              number="3"
              title="Получи персональный материал"
              description="AI анализирует и создаёт объяснения, тесты, карточки специально под твой уровень"
              icon={<Brain className="w-6 h-6" />}
            />
            <StepCard 
              number="4"
              title="Учись и тренируйся"
              description="Проходи тесты, слушай голосовые объяснения, повторяй по карточкам"
              icon={<Sparkles className="w-6 h-6" />}
            />
            <StepCard 
              number="5"
              title="Отслеживай прогресс"
              description="Смотри статистику, получай рекомендации, готовься к экзамену по плану"
              icon={<TrendingUp className="w-6 h-6" />}
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-white" id="pricing">
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
                "Базовые карточки",
                "Простые тесты",
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
                "Все режимы обучения",
                "PDF → конспект",
                "Голосовые объяснения",
                "Режим 'Экзамен'",
                "Групповой режим",
                "Анализ прогресса"
              ]}
              buttonText="Оформить подписку"
              buttonLink="/app"
              highlighted={true}
              badge="🔥 Популярный"
            />
            <PricingCard 
              name="Plus 7 дней"
              price="249₽"
              period="/неделя"
              features={[
                "Все функции Premium",
                "Срок: 7 дней",
                "Докупай аддоны:",
                "+ Глубокий анализ (29₽)",
                "+ PDF PRO (39₽)",
                "+ Стиль текста (19₽)",
                "Без автосписаний"
              ]}
              buttonText="Попробовать неделю"
              buttonLink="/app"
              highlighted={false}
            />
            <PricingCard 
              name="Lifetime"
              price="3990₽"
              period="навсегда"
              features={[
                "Доступ навсегда",
                "Все функции Premium",
                "Без подписки",
                "Все обновления",
                "VIP поддержка",
                "Ранний доступ"
              ]}
              buttonText="Купить навсегда"
              buttonLink="/app"
              highlighted={false}
              badge="💎 Выгодно"
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">
            Кто уже учится с BrainCopy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">🎓</div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
              <p className="text-gray-600">Школьников готовятся к ЕГЭ</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">📚</div>
              <div className="text-4xl font-bold text-purple-600 mb-2">3,000+</div>
              <p className="text-gray-600">Студентов сдают сессию</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">⭐</div>
              <div className="text-4xl font-bold text-orange-600 mb-2">4.9/5</div>
              <p className="text-gray-600">Средняя оценка</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white" id="faq">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Частые вопросы
          </h2>
          <div className="space-y-4">
            <FaqItem 
              question="Чем BrainCopy отличается от ChatGPT?"
              answer="BrainCopy заточен ТОЛЬКО под обучение! Мы не просто отвечаем на вопросы - мы УЧИМ. У нас есть режимы подготовки к экзаменам, система карточек, анализ прогресса, групповой режим. ChatGPT - это универсальный помощник, мы - специализированный репетитор."
              isOpen={openFaq === 0}
              onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
            />
            <FaqItem 
              question="Правда ли распознаёте любой почерк?"
              answer="Да! 🔥 Это наша киллер-фича! Используем продвинутый OCR с пониманием контекста. Даже если у тебя почерк как у врача - AI распознает и объяснит. Протестировано на тысячах рукописных конспектов."
              isOpen={openFaq === 1}
              onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
            />
            <FaqItem 
              question="Поможет ли подготовиться к ЕГЭ/ОГЭ?"
              answer="Конечно! У нас есть специальный режим 'Подготовка к экзамену' - загружаешь темы, AI создаёт план повторения, мок-тесты в формате ЕГЭ/ОГЭ, карточки для каждого дня. + Анализирует твои слабые места и предлагает доп. материалы."
              isOpen={openFaq === 2}
              onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
            />
            <FaqItem 
              question="Можно отменить подписку?"
              answer="Да, в любой момент без вопросов! Просто напиши в поддержку @braincopy_support или отмени в личном кабинете. Никаких скрытых платежей, никаких сложных отмен. Деньги за неиспользованное время вернём."
              isOpen={openFaq === 3}
              onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
            />
            <FaqItem 
              question="Работает в России? Какие способы оплаты?"
              answer="Да! Полностью работаем в РФ. Принимаем российские карты (Мир, Visa, Mastercard), СБП, ЮMoney. Оплата через ЮKassa или Boosty. Поддержка на русском в Telegram."
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
            Присоединяйся к тысячам студентов, которые уже получают пятёрки с BrainCopy
          </p>
          <Link 
            href="/app"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 text-lg font-bold rounded-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            <Zap className="w-6 h-6" />
            Начать учиться бесплатно
          </Link>
          <p className="mt-6 text-sm opacity-75">
            5 объяснений бесплатно • Без карты • Без регистрации • Результат за 30 секунд
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
                AI-репетитор для эффективной учёбы.<br/>Сделано с ❤️ для студентов в России 🇷🇺
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
                <li><a href="https://t.me/braincopy_support" target="_blank" rel="noopener" className="hover:text-white transition">Telegram</a></li>
                <li><a href="mailto:support@braincopy.ru" className="hover:text-white transition">Email</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Юридическое</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-white transition">Политика конфиденциальности</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">Условия использования</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2025 BrainCopy. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Floating Telegram */}
      <a
        href="https://t.me/braincopy_support"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#0088cc] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-[99999]"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>
    </div>
  )
}

// Components
function ProblemSolutionCard({ problem, solution, icon }: any) {
  return (
    <div className="p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-green-300 hover:shadow-lg transition-all">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
          {icon}
        </div>
        <div>
          <p className="text-gray-900 font-medium mb-2">{problem}</p>
          <p className="text-green-700 font-semibold">{solution}</p>
        </div>
      </div>
    </div>
  )
}

function UniqueFeatureCard({ icon, title, description, badge }: any) {
  return (
    <div className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
          {icon}
        </div>
        <span className="text-2xl">{badge}</span>
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