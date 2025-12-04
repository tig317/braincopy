"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

interface InputSectionProps {
  onAnalysis: (input: string | File, type: "text" | "image") => void
  language: "en" | "ru"
}

export default function InputSection({ onAnalysis, language }: InputSectionProps) {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string>("")
  const [textInput, setTextInput] = useState("")
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (file: File) => {
    if (file.type.startsWith("image/") || file.type === "application/pdf") {
      setUploadedFile(file)

      // Create preview URL
      const reader = new FileReader()
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileSelect(files[0])
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Tabs defaultValue="image" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="image">{language === "ru" ? "Загрузить изображение" : "Upload Image"}</TabsTrigger>
          <TabsTrigger value="text">{language === "ru" ? "Вставить текст" : "Paste Text"}</TabsTrigger>
        </TabsList>

        {/* Image Upload Tab */}
        <TabsContent value="image" className="space-y-6">
          {!uploadedFile ? (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all cursor-pointer ${
                isDragging
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20"
                  : "border-border bg-muted hover:border-blue-400"
              }`}
            >
              <div className="flex justify-center mb-4">
                <Upload className="w-16 h-16 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {language === "ru" ? "Перетащите файл сюда" : "Drag and drop your file here"}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {language === "ru" ? "или нажмите кнопку ниже" : "or click the button below"}
              </p>
              <Button onClick={() => fileInputRef.current?.click()} variant="outline">
                {language === "ru" ? "Выбрать файл" : "Choose file"}
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                {language === "ru" ? "JPG, PNG, PDF (макс. 10MB)" : "JPG, PNG, PDF (max 10MB)"}
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,.pdf"
                onChange={(e) => e.target.files && handleFileSelect(e.target.files[0])}
                className="hidden"
              />
            </div>
          ) : (
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden bg-muted p-4 border border-border">
                {previewUrl.startsWith("data:image") && (
                  <img src={previewUrl || "/placeholder.svg"} alt="Preview" className="max-h-64 mx-auto rounded-lg" />
                )}
                {!previewUrl.startsWith("data:image") && (
                  <div className="flex items-center justify-center h-64 bg-muted rounded-lg">
                    <FileText className="w-12 h-12 text-muted-foreground" />
                  </div>
                )}
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={() => {
                    setUploadedFile(null)
                    setPreviewUrl("")
                  }}
                  variant="outline"
                  className="flex-1"
                >
                  {language === "ru" ? "Изменить" : "Change"}
                </Button>
                <Button
                  onClick={() => onAnalysis(uploadedFile!, "image")}
                  className="flex-1 gradient-primary text-white"
                >
                  {language === "ru" ? "Обработать изображение" : "Process Image"}
                </Button>
              </div>
            </div>
          )}
        </TabsContent>

        {/* Text Input Tab */}
        <TabsContent value="text" className="space-y-6">
          <div className="space-y-4">
            <Textarea
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder={language === "ru" ? "Вставьте ваши заметки сюда..." : "Paste your notes here..."}
              className="min-h-64 resize-none text-base"
            />
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {textInput.length} / 10000 {language === "ru" ? "символов" : "characters"}
              </span>
              {textInput && (
                <button
                  onClick={() => setTextInput("")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  ✕ {language === "ru" ? "Очистить" : "Clear"}
                </button>
              )}
            </div>
          </div>
          <Button
            onClick={() => onAnalysis(textInput, "text")}
            disabled={!textInput}
            className="w-full gradient-primary text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {language === "ru" ? "Анализировать текст" : "Analyze Text"}
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  )
}
