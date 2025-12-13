'use client';

import { useState, useRef } from 'react';
import { Brain, Upload, Sparkles, BookOpen, Zap, Shield, ChevronDown, Check, X, FileText, ArrowLeft, Loader2, Download } from 'lucide-react';

export default function HomePage() {
  const [showApp, setShowApp] = useState(false);

  if (showApp) {
    return <AppPage onBack={() => setShowApp(false)} />;
  }

  return <LandingPage onStartClick={() => setShowApp(true)} />;
}

// LANDING PAGE
function LandingPage({ onStartClick }: { onStartClick: () => void }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Навигация */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200/50 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center transform group-hover:scale-105 transition-transform">
                <Brain className="w-7 h-7 text-white" />
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              BrainCopy
            </span>
          </div>
          
          <button 
            onClick={onStartClick}
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-200"
          >
            Попробовать бесплатно
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            🎓 Твой персональный AI-учитель
          </div>
          
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Учись легче
            </span>
            <br />
            с искусственным интеллектом
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Сфотографируй конспект, получи объяснения, карточки для запоминания и тесты. 
            Для школьников, студентов и всех, кто хочет учиться эффективнее.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={onStartClick}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-200 flex items-center gap-2 justify-center"
            >
              <Sparkles className="w-5 h-5" />
              Начать бесплатно
            </button>
            <a href="#how-it-works">
              <button className="px-8 py-4 bg-white text-slate-700 rounded-xl font-bold text-lg border-2 border-slate-200 hover:border-blue-500 hover:text-blue-600 transform hover:scale-105 transition-all duration-200">
                Как это работает?
              </button>
            </a>
          </div>

          {/* Demo Screenshot Placeholder */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-4 border border-slate-200">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl aspect-video flex items-center justify-center">
                <div className="text-center">
                  <Upload className="w-20 h-20 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-400 font-semibold">Загрузи фото конспекта</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Уникальные возможности */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Почему BrainCopy?
            </h2>
            <p className="text-xl text-slate-600">Возможности, которых нет у обычных AI</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<BookOpen className="w-8 h-8" />}
              title="Распознаёт любой почерк"
              description="Даже если пишешь как врач — наш OCR разберёт и объяснит. Просто сфоткай конспект с телефона."
              gradient="from-blue-500 to-cyan-500"
            />
            <FeatureCard
              icon={<Sparkles className="w-8 h-8" />}
              title="Личная библиотека знаний"
              description="Все твои конспекты, карточки и тесты в одном месте. Доступны даже оффлайн."
              gradient="from-indigo-500 to-purple-500"
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Заточено под учёбу"
              description="Генерируем объяснения специально для студентов и школьников. Понятно и по делу."
              gradient="from-purple-500 to-pink-500"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Приватность важна"
              description="OCR работает прямо в браузере. Твои конспекты остаются только у тебя."
              gradient="from-pink-500 to-rose-500"
            />
          </div>
        </div>
      </section>

      {/* Как работает */}
      <section id="how-it-works" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Три простых шага
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Загрузи"
              description="Сфотографируй конспект или вставь текст. Поддерживаем русский и английский."
            />
            <StepCard
              number="2"
              title="AI анализирует"
              description="Искусственный интеллект разбирает материал и создаёт понятные объяснения."
            />
            <StepCard
              number="3"
              title="Учись"
              description="Получи карточки для запоминания, тесты для проверки и краткие выводы."
            />
          </div>
        </div>
      </section>

      {/* Для кого */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Для кого это?
          </h2>
          <p className="text-center text-xl text-slate-600 mb-16">Всем, кто учится или хочет научиться чему-то новому</p>

          <div className="grid md:grid-cols-3 gap-6">
            <AudienceCard 
              emoji="🎓"
              title="Школьники"
              description="Домашка, сложные темы — всё станет понятнее. Готовься к экзаменам эффективно."
            />
            <AudienceCard 
              emoji="📚"
              title="Студенты"
              description="Сессия, дипломы, курсовые — быстрая помощь с любым материалом."
            />
            <AudienceCard 
              emoji="💼"
              title="Специалисты"
              description="Быстро вникнуть в новую область или технологию для работы."
            />
            <AudienceCard 
              emoji="🚀"
              title="Самоучки"
              description="Учишься сам? BrainCopy — твой персональный AI-ментор."
            />
            <AudienceCard 
              emoji="🌍"
              title="Изучаешь языки"
              description="Переводи и объясняй сложные тексты на любом языке."
            />
            <AudienceCard 
              emoji="💡"
              title="Просто любопытные"
              description="Хочешь понять сложную тему? Мы объясним простыми словами."
            />
          </div>
        </div>
      </section>

      {/* Тарифы */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Выбери свой план
          </h2>
          <p className="text-center text-xl text-slate-600 mb-16">Начни бесплатно, обнови когда понадобится</p>

          <div className="grid md:grid-cols-4 gap-6">
            <PricingCard
              name="Бесплатно"
              price="0₽"
              period="навсегда"
              features={[
                "10 AI-анализов",
                "Базовые объяснения",
                "Карточки для запоминания",
                "Тесты для проверки"
              ]}
              notIncluded={[
                "Личная библиотека",
                "Экспорт в PDF"
              ]}
              buttonText="Попробовать"
              primary={false}
              onStartClick={onStartClick}
            />
            
            <PricingCard
              name="Premium"
              price="299₽"
              period="в месяц"
              features={[
                "Безлимитные запросы",
                "Продвинутые объяснения",
                "Личная библиотека",
                "Экспорт в PDF",
                "Приоритетная поддержка",
                "Работа оффлайн"
              ]}
              notIncluded={[]}
              buttonText="Оформить"
              primary={true}
              badge="Популярно"
              onStartClick={onStartClick}
            />
            
            <PricingCard
              name="Plus Add-ons"
              price="249₽"
              period="за 7 дней"
              features={[
                "Весь Premium доступ",
                "На 7 дней",
                "+ Глубокий анализ (29₽)",
                "+ PDF-конспект PRO (39₽)",
                "+ Переписать в стиль (19₽)",
                "+ Генерация шпаргалки (25₽)"
              ]}
              notIncluded={[]}
              buttonText="Попробовать"
              primary={false}
              badge="Гибко"
              onStartClick={onStartClick}
            />
            
            <PricingCard
              name="Lifetime"
              price="3 990₽"
              period="один раз"
              features={[
                "Весь функционал",
                "Навсегда",
                "Все будущие обновления",
                "VIP поддержка",
                "Ранний доступ к фичам"
              ]}
              notIncluded={[]}
              buttonText="Купить навсегда"
              primary={false}
              badge="Выгодно"
              onStartClick={onStartClick}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Частые вопросы
          </h2>

          <div className="space-y-4">
            <FAQItem
              question="Чем BrainCopy отличается от ChatGPT?"
              answer="BrainCopy заточен под учёбу! Мы распознаём ЛЮБОЙ почерк (даже кривой), создаём карточки и тесты, сохраняем всё в личную библиотеку. ChatGPT - общий инструмент, мы - специализированный учебный помощник с функциями, которых нет нигде."
              isOpen={openFaq === 0}
              onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
            />
            <FAQItem
              question="Можно ли загружать рукописные фото?"
              answer="Да! Это наша суперсила! 🔥 Даже если у тебя почерк как у врача - AI распознает и объяснит. Мы используем продвинутый OCR который понимает контекст и работает прямо в твоём браузере."
              isOpen={openFaq === 1}
              onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
            />
            <FAQItem
              question="Сохраняются ли мои материалы?"
              answer="Да! Все конспекты сохраняются в твоей личной библиотеке (в Premium плане). Они доступны даже без интернета. Мы не передаём твои данные третьим лицам - OCR работает локально в браузере."
              isOpen={openFaq === 2}
              onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
            />
            <FAQItem
              question="Можно ли отменить подписку?"
              answer="Конечно! В любой момент без вопросов. Просто напиши в поддержку. Никаких скрытых платежей или сложных отмен."
              isOpen={openFaq === 3}
              onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
            />
            <FAQItem
              question="Какие языки поддерживаются?"
              answer="Русский и английский на 100%. Также можем работать с другими языками, но качество распознавания может быть ниже. Постоянно добавляем новые языки!"
              isOpen={openFaq === 4}
              onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-white mb-6">
            Готов учиться эффективнее?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Присоединяйся к тысячам студентов, которые уже улучшили свою учёбу с BrainCopy
          </p>
          <button 
            onClick={onStartClick}
            className="px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            Начать бесплатно →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-6 h-6 text-blue-400" />
                <span className="text-white font-bold text-lg">BrainCopy</span>
              </div>
              <p className="text-sm text-slate-400">
                Твой персональный AI-учитель для эффективного обучения
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://t.me/braincopy_support" className="hover:text-blue-400 transition-colors">Telegram</a></li>
                <li><a href="mailto:support@braincopy.com" className="hover:text-blue-400 transition-colors">Email</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Правовая информация</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Условия использования</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>© 2024 BrainCopy. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// APP PAGE (Рабочее приложение)
function AppPage({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<'upload' | 'text'>('upload');
  const [inputText, setInputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [usageCount, setUsageCount] = useState(0);
  const [isPremium, setIsPremium] = useState(false);
  const [language, setLanguage] = useState('ru');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const MAX_FREE_USES = 10;

  const handleTextSubmit = () => {
    if (!inputText.trim()) {
      alert('Введите текст для анализа!');
      return;
    }

    if (!isPremium && usageCount >= MAX_FREE_USES) {
      alert('Достигнут лимит бесплатных запросов! Обновитесь до Premium.');
      return;
    }

    setIsProcessing(true);
    setResults(null);

    // Демо-версия (позже подключите API)
    setTimeout(() => {
      setResults({
        summary: 'Краткое содержание: ' + inputText.substring(0, 100) + '...',
        explanation: 'Подробное объяснение материала появится здесь после подключения API ключей OpenAI.',
        keyPoints: [
          'Ключевая мысль 1',
          'Ключевая мысль 2',
          'Ключевая мысль 3'
        ],
        flashcards: [
          { question: 'Пример вопроса 1?', answer: 'Пример ответа 1' },
          { question: 'Пример вопроса 2?', answer: 'Пример ответа 2' }
        ],
        quiz: [
          {
            question: 'Пример тестового вопроса?',
            options: ['Вариант А', 'Вариант Б', 'Вариант В', 'Вариант Г'],
            correct: 0
          }
        ]
      });
      
      if (!isPremium) {
        const newCount = usageCount + 1;
        setUsageCount(newCount);
      }
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Навигация */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200/50 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-3 group">
            <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                BrainCopy
              </span>
            </div>
          </button>
          
          <div className="flex items-center gap-4">
            <div className="text-sm">
              {isPremium ? (
                <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold">
                  Premium ✓
                </span>
              ) : (
                <span className="text-slate-600">
                  {usageCount}/{MAX_FREE_USES} запросов
                </span>
              )}
            </div>
            
            {!isPremium && (
              <button 
                onClick={() => alert('Функция подключения Premium скоро появится!')}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Обновить
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Основной контент */}
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Вкладки */}
          <div className="flex gap-4 mb-8 bg-white rounded-xl p-2 shadow-sm border border-slate-200">
            <button
              onClick={() => setActiveTab('upload')}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'upload'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Upload className="w-5 h-5 inline mr-2" />
              Загрузить фото
            </button>
            <button
              onClick={() => setActiveTab('text')}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'text'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-5 h-5 inline mr-2" />
              Вставить текст
            </button>
          </div>

          {/* Выбор языка */}
          <div className="mb-6 flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-slate-200">
            <label className="text-slate-700 font-semibold">Язык объяснения:</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
            >
              <option value="ru">🇷🇺 Русский</option>
              <option value="en">🇬🇧 English</option>
            </select>
          </div>

          {/* Зона загрузки / ввода */}
          {activeTab === 'upload' ? (
            <div className="bg-white rounded-2xl p-12 shadow-xl border-2 border-dashed border-slate-300 hover:border-blue-500 transition-colors">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => alert('OCR будет подключён после настройки API')}
                className="hidden"
              />
              <div className="text-center">
                <Upload className="w-20 h-20 text-slate-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Загрузите фото конспекта
                </h3>
                <p className="text-slate-600 mb-8">
                  Любой почерк, любая сложность — мы разберём!
                </p>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isProcessing}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Выбрать файл
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Вставьте текст для анализа
              </h3>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Скопируйте текст из конспекта, учебника или любого источника..."
                className="w-full h-64 p-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none resize-none text-slate-700"
                disabled={isProcessing}
              />
              <button
                onClick={handleTextSubmit}
                disabled={isProcessing || !inputText.trim()}
                className="mt-4 w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Анализирую...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Анализировать
                  </>
                )}
              </button>
            </div>
          )}

          {/* Результаты */}
          {results && !isProcessing && (
            <div className="mt-8 space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-yellow-500" />
                  Краткое содержание
                </h3>
                <p className="text-slate-700 leading-relaxed text-lg">
                  {results.summary}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Подробное объяснение
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {results.explanation}
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

// Компоненты Landing
function FeatureCard({ icon, title, description, gradient }: any) {
  return (
    <div className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
      <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }: any) {
  return (
    <div className="relative">
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
        {number}
      </div>
      <div className="bg-white rounded-2xl p-8 pt-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center">{title}</h3>
        <p className="text-slate-600 text-center leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function AudienceCard({ emoji, title, description }: any) {
  return (
    <div className="bg-white rounded-xl p-6 border-2 border-slate-100 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group">
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{emoji}</div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}

function PricingCard({ name, price, period, features, notIncluded, buttonText, primary, badge, onStartClick }: any) {
  return (
    <div className={`relative bg-white rounded-2xl p-8 border-2 ${primary ? 'border-blue-500 shadow-xl scale-105' : 'border-slate-200'} hover:shadow-2xl transition-all duration-300`}>
      {badge && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold rounded-full">
          {badge}
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-slate-900 mb-2">{name}</h3>
      <div className="mb-6">
        <span className="text-4xl font-extrabold text-slate-900">{price}</span>
        <span className="text-slate-600 ml-2">{period}</span>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature: string, i: number) => (
          <li key={i} className="flex items-start gap-2 text-slate-700">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
        {notIncluded.map((feature: string, i: number) => (
          <li key={i} className="flex items-start gap-2 text-slate-400">
            <X className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <button 
        onClick={onStartClick}
        className={`w-full py-3 rounded-xl font-bold transition-all duration-200 ${
          primary 
            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105' 
            : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}

function FAQItem({ question, answer, isOpen, onClick }: any) {
  return (
    <div className="border-2 border-slate-100 rounded-xl overflow-hidden hover:border-blue-500 transition-colors duration-200">
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors duration-200"
      >
        <span className="text-lg font-semibold text-slate-900">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-5 text-slate-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}