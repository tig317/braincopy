"use client"

export default function ProcessingState({ language }: { language: "en" | "ru" }) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="flex gap-1 mb-6">
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
      </div>

      <h3 className="text-xl font-semibold text-foreground mb-2">
        {language === "ru" ? "Распознавание текста..." : "Recognizing text..."}
      </h3>

      <p className="text-muted-foreground mb-4">
        {language === "ru" ? "Анализ с помощью AI..." : "Analyzing with AI..."}
      </p>

      <p className="text-sm text-muted-foreground">
        {language === "ru" ? "Это может занять 30-60 секунд" : "This may take 30-60 seconds"}
      </p>
    </div>
  )
}
