"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { AnalysisResult } from "@/lib/types"

interface ResultsSectionProps {
  results: AnalysisResult
  language: "en" | "ru"
}

export default function ResultsSection({ results, language }: ResultsSectionProps) {
  const [copied, setCopied] = useState(false)
  const [currentCard, setCurrentCard] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<number[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(results.explanation)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleQuizAnswer = (optionIndex: number) => {
    setQuizAnswers([...quizAnswers, optionIndex])

    if (currentQuestion < results.quiz.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 500)
    } else {
      setTimeout(() => setShowScore(true), 500)
    }
  }

  const correctAnswers = quizAnswers.filter((answer, index) => answer === results.quiz[index].correct).length

  return (
    <div className="w-full">
      <Tabs defaultValue="summary" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-8">
          <TabsTrigger value="summary">{language === "ru" ? "Резюме" : "Summary"}</TabsTrigger>
          <TabsTrigger value="explanation">{language === "ru" ? "Объяснение" : "Explanation"}</TabsTrigger>
          <TabsTrigger value="flashcards">{language === "ru" ? "Карточки" : "Flashcards"}</TabsTrigger>
          <TabsTrigger value="quiz">{language === "ru" ? "Тест" : "Quiz"}</TabsTrigger>
        </TabsList>

        {/* Summary Tab */}
        <TabsContent value="summary" className="space-y-8">
          <div className="space-y-4">
            <p className="text-xl text-foreground leading-relaxed">{results.summary}</p>
          </div>

          {results.keyPoints.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                {language === "ru" ? "Ключевые моменты" : "Key Points"}
              </h3>
              <div className="space-y-3">
                {results.keyPoints.map((point, index) => (
                  <Card key={index} className="p-4 flex gap-4 hover:shadow-md transition-shadow">
                    <div className="text-green-600 dark:text-green-400 flex-shrink-0 mt-1">✓</div>
                    <p className="text-foreground">{point}</p>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </TabsContent>

        {/* Explanation Tab */}
        <TabsContent value="explanation" className="space-y-6">
          <div className="relative">
            <Button
              onClick={copyToClipboard}
              variant="outline"
              size="sm"
              className="absolute top-0 right-0 bg-transparent"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  {language === "ru" ? "Скопировано" : "Copied"}
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  {language === "ru" ? "Копировать" : "Copy"}
                </>
              )}
            </Button>
          </div>

          <div className="prose prose-sm dark:prose-invert max-w-none mt-12">
            <p className="text-base leading-relaxed text-foreground whitespace-pre-wrap">{results.explanation}</p>
          </div>
        </TabsContent>

        {/* Flashcards Tab */}
        <TabsContent value="flashcards" className="space-y-6">
          <div className="space-y-4">
            {/* Card Counter */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {language === "ru" ? "Карточка" : "Card"} {currentCard + 1} {language === "ru" ? "из" : "of"}{" "}
                {results.flashcards.length}
              </p>
            </div>

            {/* Flip Card */}
            <div onClick={() => setFlipped(!flipped)} className="flip-card w-full h-96 cursor-pointer">
              <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
                {/* Front */}
                <div className="flip-card-front w-full h-full">
                  <Card className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
                    <h3 className="text-2xl font-bold text-center text-foreground mb-4">
                      {results.flashcards[currentCard].question}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === "ru" ? "Нажмите для ответа" : "Tap to reveal"}
                    </p>
                  </Card>
                </div>

                {/* Back */}
                <div className="flip-card-back w-full h-full">
                  <Card className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <p className="text-xl text-center text-foreground">{results.flashcards[currentCard].answer}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {language === "ru" ? "Нажмите для вопроса" : "Tap to flip back"}
                    </p>
                  </Card>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-3 justify-center">
              <Button
                onClick={() => {
                  if (currentCard > 0) {
                    setCurrentCard(currentCard - 1)
                    setFlipped(false)
                  }
                }}
                disabled={currentCard === 0}
                variant="outline"
              >
                {language === "ru" ? "Назад" : "Previous"}
              </Button>
              <Button
                onClick={() => {
                  if (currentCard < results.flashcards.length - 1) {
                    setCurrentCard(currentCard + 1)
                    setFlipped(false)
                  }
                }}
                disabled={currentCard === results.flashcards.length - 1}
                className="gradient-primary text-white"
              >
                {language === "ru" ? "Далее" : "Next"}
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Quiz Tab */}
        <TabsContent value="quiz" className="space-y-6">
          {showScore ? (
            <div className="text-center py-12">
              <h3 className="text-4xl font-bold text-foreground mb-4">
                {correctAnswers}/{results.quiz.length}
              </h3>
              <p className="text-xl text-muted-foreground mb-2">{language === "ru" ? "Ваш результат" : "Your Score"}</p>
              <p className="text-3xl mb-8">
                {correctAnswers === results.quiz.length
                  ? "🎉"
                  : correctAnswers >= results.quiz.length / 2
                    ? "👏"
                    : "💪"}
              </p>
              <Button
                onClick={() => {
                  setShowScore(false)
                  setCurrentQuestion(0)
                  setQuizAnswers([])
                }}
                className="gradient-primary text-white"
              >
                {language === "ru" ? "Начать заново" : "Start Over"}
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">
                  {language === "ru" ? "Вопрос" : "Question"} {currentQuestion + 1} {language === "ru" ? "из" : "of"}{" "}
                  {results.quiz.length}
                </h3>
                <div className="w-32 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 transition-all"
                    style={{
                      width: `${((currentQuestion + 1) / results.quiz.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <p className="text-xl font-semibold text-foreground">{results.quiz[currentQuestion].question}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {results.quiz[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuizAnswer(index)}
                    disabled={quizAnswers.length > currentQuestion}
                    className={`p-4 rounded-lg border-2 font-medium transition-all text-left ${
                      quizAnswers.length > currentQuestion
                        ? index === results.quiz[currentQuestion].correct
                          ? "border-green-500 bg-green-50 dark:bg-green-950 text-foreground"
                          : index === quizAnswers[currentQuestion]
                            ? "border-red-500 bg-red-50 dark:bg-red-950 text-foreground"
                            : "border-border bg-muted text-muted-foreground"
                        : "border-border hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 text-foreground cursor-pointer"
                    } disabled:cursor-default`}
                  >
                    <span className="font-bold mr-3">{String.fromCharCode(65 + index)}.</span>
                    {option}
                  </button>
                ))}
              </div>

              {quizAnswers.length > currentQuestion && (
                <Button
                  onClick={() => {
                    if (currentQuestion < results.quiz.length - 1) {
                      setCurrentQuestion(currentQuestion + 1)
                    } else {
                      setShowScore(true)
                    }
                  }}
                  className="w-full gradient-primary text-white"
                >
                  {currentQuestion === results.quiz.length - 1
                    ? language === "ru"
                      ? "Завершить"
                      : "Finish"
                    : language === "ru"
                      ? "Следующий вопрос"
                      : "Next Question"}
                </Button>
              )}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
