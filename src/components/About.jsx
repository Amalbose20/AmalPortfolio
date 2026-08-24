import useReveal from '../useReveal.jsx'
import { contact, languages } from '../data.jsx'

export default function About() {
  const [ref, inView] = useReveal()

  return (
    <section id="about">
      <div ref={ref} className={`wrap reveal${inView ? ' in' : ''}`}>
        <div className="section-head">
          <span className="section-num">· About</span>
          <h2>Grounded in fundamentals, curious by default.</h2>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm currently completing my <strong>Master of Computer Application</strong> at St.
              Xavier's Catholic College of Engineering, Nagercoil, after a Bachelor's in Computer
              Science from St. Jude's College, Thoothoor. My work sits at the join between structured
              data and the interfaces people actually touch.
            </p>
            <p>
              I think in <strong>C, Java and Python</strong> for logic, reach for{' '}
              <strong>PL/SQL and MySQL</strong> to make data behave, and shape what's on screen with{' '}
              <strong>React, Tailwind CSS and plain HTML/CSS</strong>. I'm just as comfortable in Power
              BI turning numbers into a story, or Git tracking how that story changes.
            </p>
            <p>
              What I bring beyond the stack: steady teamwork, a habit of listening before assuming,
              and a stubborn curiosity that keeps me learning past the point most people stop.
            </p>
            <div className="lang-row">
              {languages.map((lang) => (
                <span className="lang-chip" key={lang}>{lang}</span>
              ))}
            </div>
          </div>
          <div className="fact-card">
            <div className="fact-row"><span className="k">LOCATION</span><span className="v">{contact.location}</span></div>
            <div className="fact-row"><span className="k">DEGREE</span><span className="v">MCA, 2024–2026</span></div>
            <div className="fact-row"><span className="k">EMAIL</span><span className="v">{contact.email}</span></div>
            <div className="fact-row"><span className="k">PHONE</span><span className="v">{contact.phone}</span></div>
            <div className="fact-row"><span className="k">SOFT SKILLS</span><span className="v">Teamwork, Adaptability</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
