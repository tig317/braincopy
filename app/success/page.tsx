import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Success() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center">
        {/* Green Checkmark Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-green-100 rounded-full animate-pulse" />
            <CheckCircle2 className="w-24 h-24 text-green-500 relative" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Спасибо!</h1>
        <p className="text-2xl font-semibold text-gray-900 mb-8">Платёж прошёл успешно.</p>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          Доступ к премиум-возможностям активирован. Можете возвращаться в приложение.
        </p>

        {/* Button */}
        <Link href="/">
          <Button className="w-full bg-[#4285F4] hover:bg-[#3367D6] text-white font-semibold py-6 text-lg rounded-lg">
            Перейти на главную →
          </Button>
        </Link>
      </div>
    </div>
  )
}
