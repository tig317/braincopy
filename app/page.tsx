export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">
          🧠 BrainCopy
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          AI-помощник для учёбы
        </p>
        <a 
          href="/landing"
          className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition"
        >
          Смотреть полную версию →
        </a>
      </div>
    </div>
  )
}
