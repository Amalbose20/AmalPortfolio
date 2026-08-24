import { useState } from 'react'
import { navItems } from '../data.jsx'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <nav className="wrap">
        <a href="#top" className="brand">Amal<span>.</span></a>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
            </li>
          ))}
        </ul>
        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>
      </nav>
    </header>
  )
}
