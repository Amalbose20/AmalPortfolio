import useReveal from '../useReveal.jsx'
import { contact } from '../data.jsx'

export default function Contact() {
  const [ref, inView] = useReveal()

  return (
    <section id="contact">
      <div ref={ref} className={`wrap reveal${inView ? ' in' : ''}`}>
        <div className="contact-card">
          <span className="section-num">· Contact</span>
          <h2>Let's talk about where this goes next.</h2>
          <p>Open to software engineering roles and full‑stack opportunities. I usually reply within a day.</p>
          <div className="contact-links">
            <a className="btn btn-primary" href={`mailto:${contact.email}`}>{contact.email}</a>
            <a className="btn btn-ghost" href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
            <a className="btn btn-ghost" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
