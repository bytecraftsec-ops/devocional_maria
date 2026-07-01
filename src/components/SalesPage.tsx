import { useState } from 'react'
import { CAROUSEL_IMAGES, SALES_IMAGES, CHECKOUT_URL, imgUrl } from '../funnelData'

export function SalesPage() {
  const [carouselIndex, setCarouselIndex] = useState(0)

  const handleCheckout = () => {
    window.location.href = CHECKOUT_URL
  }

  return (
    <div className="flex flex-col gap-6 animate-fade-in-up">
      {/* Hero */}
      <div className="text-center">
        <h2 className="text-lg font-bold leading-snug">
          <span className="text-primary-700">Seu Devocional com Maria está pronto!</span>{' '}
          <span className="text-gray-950 font-bold">Veja abaixo 🙏</span>
        </h2>
      </div>
      <img src={imgUrl(SALES_IMAGES.main)} alt="Devocional" className="w-full rounded-2xl shadow-lg" />

      {/* Package */}
      <div className="text-center">
        <h3 className="text-lg font-bold text-gray-950">O que está incluso em seu pacote devocional?</h3>
      </div>
      <img src={imgUrl(SALES_IMAGES.package1)} alt="Pacote" className="w-full rounded-2xl shadow-lg" />
      <img src={imgUrl(SALES_IMAGES.package2)} alt="Pacote" className="w-full rounded-2xl shadow-lg" />

      {/* CTA 1 */}
      <button onClick={handleCheckout} className="btn-success animate-pulse-slow">
        EU QUERO MARIA COMIGO!
      </button>
      <p className="text-center text-base">
        <span className="text-red-600">De <s>R$97</s> </span>
        <span className="text-green-800 font-semibold">por apenas R$37,00 ou 8x de R$5,38</span>
      </p>

      {/* Bonus images */}
      <img src={imgUrl(SALES_IMAGES.bonus1)} alt="Bônus" className="w-full rounded-2xl shadow-lg" />
      <img src={imgUrl(SALES_IMAGES.bonus2)} alt="Bônus" className="w-full rounded-2xl shadow-lg" />

      {/* CTA 2 */}
      <button onClick={handleCheckout} className="btn-success animate-pulse-slow">
        EU QUERO MARIA COMIGO!
      </button>
      <p className="text-center text-base">
        <span className="text-red-600">De <s>R$97</s> </span>
        <span className="text-green-800 font-semibold">por apenas R$37,00 ou 8x de R$5,38</span>
      </p>

      <img src={imgUrl(SALES_IMAGES.guaranteeSmall)} alt="Garantia" className="mx-auto w-60 rounded-2xl shadow-lg" />

      {/* Reviews */}
      <div className="text-center">
        <h3 className="text-lg font-bold text-gray-950">Nosso Devocional é confiável?</h3>
        <p className="mt-1 text-sm text-gray-600">SIM! 100% aqui estão algumas avaliações das pessoas que já adquiriram! 👇</p>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
        >
          {CAROUSEL_IMAGES.map((uuid, i) => (
            <div key={i} className="w-full flex-shrink-0">
              <img src={imgUrl(uuid)} alt={`Avaliação ${i + 1}`} className="w-full" />
            </div>
          ))}
        </div>
        <button
          onClick={() => setCarouselIndex((prev) => (prev === 0 ? CAROUSEL_IMAGES.length - 1 : prev - 1))}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md backdrop-blur transition hover:bg-white"
        >
          <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          onClick={() => setCarouselIndex((prev) => (prev === CAROUSEL_IMAGES.length - 1 ? 0 : prev + 1))}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md backdrop-blur transition hover:bg-white"
        >
          <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {CAROUSEL_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCarouselIndex(i)}
              className={`h-2 rounded-full transition-all ${i === carouselIndex ? 'w-6 bg-primary-600' : 'w-2 bg-white/70'}`}
            />
          ))}
        </div>
      </div>

      {/* CTA 3 */}
      <button onClick={handleCheckout} className="btn-success animate-pulse-slow">
        EU QUERO MARIA COMIGO!
      </button>
      <p className="text-center text-base">
        <span className="text-red-600">De <s>R$97</s> </span>
        <span className="text-green-800 font-semibold">por apenas R$37,00 ou 8x de R$5,38</span>
      </p>

      {/* Guarantee */}
      <div className="text-center">
        <h3 className="text-lg font-bold text-gray-950">Tem Garantia?</h3>
        <p className="mt-1 text-sm text-gray-600 leading-relaxed">
          SIM! Estamos tão confiantes que o nosso Devocional te ajudará que garantimos um reembolso total no prazo de 90 dias após a compra.
        </p>
      </div>
      <img src={imgUrl(SALES_IMAGES.guaranteeSeal)} alt="Selo de garantia" className="mx-auto w-44 rounded-2xl shadow-lg" />
    </div>
  )
}
