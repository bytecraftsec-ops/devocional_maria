import { useState, useCallback } from 'react'
import { Header, ProgressBar } from './components/Header'
import { Quiz } from './components/Quiz'
import { FormView } from './components/FormView'
import { LoadingView } from './components/LoadingView'
import { AudioPage } from './components/AudioPage'
import { SalesPage } from './components/SalesPage'
import {
  LANDING_IMAGE_UUID, LOADING_IMAGE_UUID, imgUrl,
  type QuizOption, type FormField,
} from './funnelData'

type Step =
  | 'landing'
  | 'formName'
  | 'confirmName'
  | 'quizAreas'
  | 'quizCoracao'
  | 'quizResolvido'
  | 'audio'
  | 'formPrece'
  | 'quizValioso'
  | 'loading'
  | 'sales'

const STEPS: Record<Step, number> = {
  landing: 0,
  formName: 10,
  confirmName: 20,
  quizAreas: 30,
  quizCoracao: 40,
  quizResolvido: 50,
  audio: 60,
  formPrece: 80,
  quizValioso: 90,
  loading: 95,
  sales: 100,
}

const quizAreasOptions: QuizOption[] = [
  { id: '1', emoji: '💵', title: 'Minha vida financeira e profissional' },
  { id: '2', emoji: '💓', title: 'Harmonia nos relacionamentos familiares' },
  { id: '3', emoji: '🛐', title: 'Proteção e força espiritual' },
  { id: '4', emoji: '🙏', title: 'Minha caminhada de fé' },
  { id: '5', emoji: '💭', title: 'Outra intenção' },
]

const quizCoracaoOptions: QuizOption[] = [
  { id: '1', emoji: '❤️‍🔥', title: 'Sinto que preciso de uma purificação interior' },
  { id: '2', emoji: '🌿', title: 'Busco uma renovação espiritual' },
  { id: '3', emoji: '🕊️', title: 'Estou em paz, mas desejo mais clareza e direção' },
  { id: '4', emoji: '🛡️', title: 'Sinto necessidade de proteção e paz espiritual' },
  { id: '5', emoji: '🙏', title: 'Quero fortalecer minha fé e minha comunhão com Deus' },
]

const quizResolvidoOptions: QuizOption[] = [
  { id: '1', emoji: '😟', title: 'Sim… Sinto que tudo está travado, e nada parece dar certo.' },
  { id: '2', emoji: '😔', title: 'Sim… Algumas áreas da minha vida parecem estagnadas.' },
  { id: '3', emoji: '🥰', title: 'Graças a Deus, sinto que tudo está fluindo bem no momento.' },
]

const quizValiosoOptions: QuizOption[] = [
  { id: '1', emoji: '🙏', title: 'Sim, seria muito valioso para minha vida!' },
  { id: '2', emoji: '🙌', title: 'Sim, acredito que seria útil sim.' },
  { id: '3', emoji: '🤔', title: 'Talvez… depende de como isso se aplicaria.' },
]

const nomeField: FormField = {
  id: 'nome',
  type: 'text',
  title: 'Nome',
  placeholder: 'Digite seu nome aqui',
  required: true,
  variable: 'nome',
}

const preceField: FormField = {
  id: 'prece',
  type: 'text',
  title: 'Prece',
  placeholder: 'Digite aqui sua prece...',
  required: true,
  variable: 'prece',
}

export default function App() {
  const [step, setStep] = useState<Step>('landing')
  const [nome, setNome] = useState('')
  const [prece, setPrece] = useState('')
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null)

  const goNext = useCallback((nextStep: Step) => {
    setSelectedQuiz(null)
    setStep(nextStep)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const renderStep = () => {
    switch (step) {
      case 'landing':
        return (
          <div className="flex flex-col gap-6 animate-fade-in-up">
            <div className="text-center">
              <h2 className="text-lg font-bold leading-snug" style={{ color: 'rgb(15, 141, 172)' }}>
                ISSO NÃO É POR ACASO...
              </h2>
              <p className="mt-2 text-sm text-gray-700">
                Se você chegou até aqui, é porque <strong>ELA TE CHAMOU</strong> ❤️ 🙏🏻
              </p>
            </div>
            <p className="text-center text-xl font-bold" style={{ color: 'rgb(29, 153, 182)' }}>
              Mas agora... VOCÊ VAI TER CORAGEM DE DIZER "SIM"?
            </p>
            <img src={imgUrl(LANDING_IMAGE_UUID)} alt="Nossa Senhora" className="mx-auto w-72 rounded-2xl shadow-lg" />
            <button onClick={() => goNext('formName')} className="btn-primary animate-pulse-slow">
              INICIAR JORNADA
            </button>
            <p className="text-center text-sm text-gray-600">
              📜 Responda algumas perguntas rápidas... E receba um Devocional feito para você. Com oração, direção e fé.
            </p>
          </div>
        )

      case 'formName':
        return (
          <FormView
            title="Gostaria de deixar seu nome para que o incluamos em nosso Livro de Orações?"
            subtitle="Com grande alegria, levaremos seu nome ao altar em nossas preces diárias. Ao registrá-lo aqui, unimos sua intenção à nossa comunidade de fé, confiando tudo ao Coração Misericordioso de Jesus e à intercessão de Nossa Senhora. 🙏🌹"
            field={nomeField}
            buttonText="Enviar"
            onSubmit={(value) => { setNome(value); goNext('confirmName') }}
          />
        )

      case 'confirmName':
        return (
          <div className="flex flex-col gap-6 animate-fade-in-up">
            <div className="text-center">
              <h2 className="text-lg font-bold leading-snug">
                <span style={{ color: '#0ea5e9' }}><strong>{nome}</strong></span>{' '}
                <strong>é uma bênção contar com sua presença!🙏</strong>
              </h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Seu nome já foi cuidadosamente incluído em nosso Livro de Orações. Ele será lembrado com carinho e fé em cada dia, diante do altar do Senhor.
              </p>
            </div>
            <button onClick={() => goNext('quizAreas')} className="btn-primary animate-fade-in">
              CONTINUAR
            </button>
          </div>
        )

      case 'quizAreas':
        return (
          <Quiz
            title="Em quais áreas você deseja colocar seu coração neste Devocional?"
            options={quizAreasOptions}
            onSelect={() => goNext('quizCoracao')}
            selectedId={selectedQuiz}
            setSelectedId={setSelectedQuiz}
          />
        )

      case 'quizCoracao':
        return (
          <Quiz
            title="Como está o seu coração espiritual neste momento?"
            options={quizCoracaoOptions}
            onSelect={() => goNext('quizResolvido')}
            selectedId={selectedQuiz}
            setSelectedId={setSelectedQuiz}
          />
        )

      case 'quizResolvido':
        return (
          <Quiz
            title="Você sente que há algo em sua vida que, apesar de seus esforços, ainda não se resolve?"
            options={quizResolvidoOptions}
            onSelect={() => goNext('audio')}
            selectedId={selectedQuiz}
            setSelectedId={setSelectedQuiz}
          />
        )

      case 'audio':
        return <AudioPage onContinue={() => goNext('formPrece')} />

      case 'formPrece':
        return (
          <FormView
            title="Deus quer te abençoar hoje! ✨🙏"
            subtitle={`<span style="color: #0ea5e9"><strong>${nome}</strong></span> Se você pudesse ver <strong> </strong><span style="color: rgb(40, 128, 210)"><strong>seu maior desejo realizado</strong></span>, o que pediria?`}
            bodyText="Talvez seja <strong>uma cura</strong>, ou a <strong>restauração da sua família</strong>, a <strong>libertação de um vício</strong>, a <strong>prosperidade financeira</strong>, o reencontro com <strong>o amor verdadeiro</strong> ou, simplesmente, a<strong> paz no coração</strong>..."
            bodyText2="Declare com fé seu pedido abaixo. Nossa Senhora, cheia de graça e fonte de bênçãos, levará sua súplica até o coração de Jesus. Ela intercederá poderosamente por você! ❤️🌹"
            field={preceField}
            buttonText="CONTINUAR"
            onSubmit={(value) => { setPrece(value); goNext('quizValioso') }}
          />
        )

      case 'quizValioso':
        return (
          <div className="flex flex-col gap-6 animate-fade-in-up">
            <Quiz
              title="Se você pudesse viver os ensinamentos de Jesus de forma prática no seu dia a dia com a intercessão de Nossa Senhora, isso seria valioso para você?"
              options={quizValiosoOptions}
              onSelect={() => goNext('loading')}
              selectedId={selectedQuiz}
              setSelectedId={setSelectedQuiz}
            />
            <p className="text-center text-sm font-semibold" style={{ color: 'rgb(0, 160, 240)' }}>
              Você está prestes a viver uma grande transformação espiritual! 🙏❤️
            </p>
          </div>
        )

      case 'loading':
        return (
          <LoadingView
            title={`Neste Devocional os caminhos se abrirão e o meu desejo de <span style="color: #0ea5e9"><strong>${prece}</strong></span> será realizado em nome de Jesus pela intercessão de Nossa Senhora.`}
            image={imgUrl(LOADING_IMAGE_UUID)}
            loadingText="Gerando seu Devocional 🙏❤️"
            loadingTime={15}
            onComplete={() => goNext('sales')}
          />
        )

      case 'sales':
        return <SalesPage />
    }
  }

  const showHeader = step !== 'landing' && step !== 'loading' && step !== 'sales'
  const showProgress = step !== 'landing' && step !== 'sales'
  const progressValue = STEPS[step]

  return (
    <div className="funnel-container">
      <main className="funnel-main">
        {showHeader && <Header />}
        {showProgress && <ProgressBar percentage={progressValue} />}
        {renderStep()}
      </main>
    </div>
  )
}
