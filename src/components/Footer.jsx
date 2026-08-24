import { contact } from '../data.jsx'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">{contact.name} · {contact.location} · © 2026</div>
    </footer>
  )
}
