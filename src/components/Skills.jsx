import useReveal from '../useReveal.jsx'
import { skillGroups } from '../data.jsx'

export default function Skills() {
  const [ref, inView] = useReveal()

  return (
    <section id="skills">
      <div ref={ref} className={`wrap reveal${inView ? ' in' : ''}`}>
        <div className="section-head">
          <span className="section-num">02 · Skills</span>
          <h2>The stack, grouped the way I reach for it.</h2>
          <p className="section-desc">Not a wall of logos — the tools sorted by the job they do for me.</p>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="chip-row">
                {group.chips.map((chip) => (
                  <span className="chip" key={chip}>{chip}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
