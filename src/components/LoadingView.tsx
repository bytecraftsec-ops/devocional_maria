import { useState, useEffect } from 'react'

interface LoadingViewProps {
  title: string
  image: string
  loadingText: string
  loadingTime: number
  onComplete: () => void
}

export function LoadingView({ title, image, loadingText, loadingTime, onComplete }: LoadingViewProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 100 / (loadingTime * 10)
      })
    }, 100)
    return () => clearInterval(interval)
  }, [loadingTime])

  useEffect(() => {
    const timer = setTimeout(onComplete, loadingTime * 1000)
    return () => clearTimeout(timer)
  }, [loadingTime, onComplete])

  return (
    <div className="flex flex-col items-center gap-6 animate-fade-in-up">
      <div className="text-center">
        <h2 className="text-lg font-bold text-gray-950 leading-snug" dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      <img src={image} alt="Devocional" className="w-40 rounded-2xl shadow-lg" />
      <div className="w-full">
        <div className="mb-2 flex items-center justify-center gap-2">
          <span className="text-base font-semibold text-gray-700">{loadingText}</span>
        </div>
        <div className="h-3 w-full overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-200 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <p className="mt-2 text-center text-sm font-medium text-primary-600">{Math.min(Math.round(progress), 100)}%</p>
      </div>
    </div>
  )
}
