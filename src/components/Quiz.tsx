import { QuizOption } from '../funnelData'

interface QuizProps {
  title: string
  subtitle?: string
  options: QuizOption[]
  onSelect: () => void
  selectedId?: string | null
  setSelectedId: (id: string | null) => void
}

export function Quiz({ title, subtitle, options, onSelect, selectedId, setSelectedId }: QuizProps) {
  const handleSelect = (id: string) => {
    setSelectedId(id)
    setTimeout(onSelect, 400)
  }

  return (
    <div className="flex flex-col gap-6 animate-fade-in-up">
      <div className="text-center">
        <h2 className="text-lg font-bold text-gray-950 leading-snug">{title}</h2>
        {subtitle && <p className="mt-2 text-sm text-gray-600">{subtitle}</p>}
      </div>
      <div className="flex flex-col gap-3">
        {options.map((option, index) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            className={`quiz-option animate-fade-in-up opacity-0-init ${selectedId === option.id ? 'quiz-option-selected' : ''}`}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <span className="text-3xl">{option.emoji}</span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">{option.title}</p>
              {option.subtitle && <p className="mt-0.5 text-xs text-gray-500">{option.subtitle}</p>}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
