export interface Flashcard {
  question: string
  answer: string
}

export interface QuizQuestion {
  question: string
  options: string[]
  correct: number
}

export interface AnalysisResult {
  summary: string
  explanation: string
  keyPoints: string[]
  flashcards: Flashcard[]
  quiz: QuizQuestion[]
}
