import { useState } from 'react'
import { FormField } from '../funnelData'

interface FormViewProps {
  title: string
  subtitle?: string
  bodyText?: string
  bodyText2?: string
  field: FormField
  buttonText: string
  onSubmit: (value: string) => void
  initialValue?: string
}

export function FormView({ title, subtitle, bodyText, bodyText2, field, buttonText, onSubmit, initialValue }: FormViewProps) {
  const [value, setValue] = useState(initialValue || '')
  const [error, setError] = useState(false)

  const handleSubmit = () => {
    if (field.required && !value.trim()) {
      setError(true)
      return
    }
    onSubmit(value.trim())
  }

  return (
    <div className="flex flex-col gap-6 animate-fade-in-up">
      <div className="text-center">
        {title && <h2 className="text-lg font-bold text-gray-950 leading-snug" dangerouslySetInnerHTML={{ __html: title }} />}
        {subtitle && <p className="mt-2 text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: subtitle }} />}
      </div>
      {bodyText && (
        <p className="text-center text-sm text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: bodyText }} />
      )}
      {bodyText2 && (
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-950 leading-snug" dangerouslySetInnerHTML={{ __html: bodyText2 }} />
        </div>
      )}
      <div className="flex flex-col gap-3">
        <input
          type="text"
          value={value}
          onChange={(e) => { setValue(e.target.value); setError(false) }}
          placeholder={field.placeholder}
          className={`form-input ${error ? 'border-red-400 ring-2 ring-red-100' : ''}`}
        />
        {error && <p className="text-sm text-red-500">Por favor, preencha este campo.</p>}
        <button onClick={handleSubmit} className="btn-primary animate-pulse-slow">
          {buttonText}
        </button>
      </div>
    </div>
  )
}
