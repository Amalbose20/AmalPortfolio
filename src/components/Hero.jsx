import { useEffect, useRef } from 'react'
import { contact } from '../data.jsx'

export default function Hero() {
  const sunRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const onScroll = () => {
      const y = Math.min(window.scrollY, 400)
      sunRef.current?.setAttribute('cy', String(330 - y * 0.15))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="hero" id="top">
      <div className="horizon">
        <svg viewBox="0 0 1080 480" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0B1220" />
              <stop offset="55%" stopColor="#16223B" />
              <stop offset="100%" stopColor="#1E2A47" />
            </linearGradient>
            <radialGradient id="sun" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F4A261" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#E76F51" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#E76F51" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1080" height="480" fill="url(#sky)" />
          <circle ref={sunRef} cx="820" cy="330" r="130" fill="url(#sun)" />
          <circle cx="820" cy="330" r="42" fill="#F4A261" opacity="0.9" />
          <path
            d="M0,400 C 220,370 380,420 540,400 C 700,382 860,410 1080,392 L1080,480 L0,480 Z"
            fill="#0B1220"
          />
          <path
            d="M0,400 C 220,370 380,420 540,400 C 700,382 860,410 1080,392"
            stroke="#F4A261"
            strokeOpacity="0.35"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>

      <div className="wrap hero-inner">
        <div className="eyebrow">{contact.location} · India</div>
        <h1 className="name">
          {contact.name}
          <br />
          <em>builds where the sea meets the sky.</em>
        </h1>
        <p className="hero-sub">
          A Master's student in Computer Applications building full‑stack foundations —{' '}
          <strong>PL/SQL depth on the backend</strong>, <strong>React on the front</strong> — with the
          same patience it takes to watch a sunrise all the way up.
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary" href={`mailto:${contact.email}`}>Email me</a>
          <a className="btn btn-ghost" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
        </div>
        <div className="hero-meta">
          <div>Phone <span>{contact.phone}</span></div>
          <div>Focus <span>Full‑Stack &amp; Databases</span></div>
          <div>Status <span>Open to opportunities</span></div>
        </div>
      </div>
    </section>
  )
}
