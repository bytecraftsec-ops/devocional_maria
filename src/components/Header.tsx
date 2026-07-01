import { LOGO_UUID, imgUrl } from '../funnelData'

export function Header() {
  return (
    <div className="flex justify-center">
      <img
        src={imgUrl(LOGO_UUID)}
        alt="Logo"
        className="h-12 w-12 rounded-full object-cover"
      />
    </div>
  )
}

export function ProgressBar({ percentage }: { percentage: number }) {
  return (
    <div className="w-full">
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-700 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
