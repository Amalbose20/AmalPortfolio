export default function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <svg viewBox="0 0 1080 40" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,20 C 270,5 400,35 540,20 C 680,5 810,35 1080,20"
          stroke="#F4A261"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
        <circle cx="540" cy="20" r="4" fill="#F4A261" />
      </svg>
    </div>
  )
}
