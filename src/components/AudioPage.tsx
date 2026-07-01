import { AUDIO_IMAGE_UUID, AUDIO_UUID, imgUrl } from '../funnelData'

interface AudioPageProps {
  onContinue: () => void
}

export function AudioPage({ onContinue }: AudioPageProps) {
  return (
    <div className="flex flex-col gap-6 animate-fade-in-up">
      <div className="text-center">
        <h2 className="text-lg font-bold text-gray-950 leading-snug">Vamos rezar juntos com fé e confiança.</h2>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          Clique no botão abaixo para ouvir esta oração e colocar suas intenções sob a proteção do Coração Imaculado de Maria. 🙏🌹❤️
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <img src={imgUrl(AUDIO_IMAGE_UUID)} alt="Oração" className="w-full max-w-xs rounded-2xl shadow-lg" />
        <audio controls className="w-full">
          <source src={`https://cdn.xquiz.co/audio/${AUDIO_UUID}.mp3`} type="audio/mpeg" />
          Seu navegador não suporta áudio.
        </audio>
      </div>
      <button onClick={onContinue} className="btn-primary animate-fade-in">
        Continuar
      </button>
    </div>
  )
}
