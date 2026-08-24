import useReveal from '../useReveal.jsx'
import Timeline from './Timeline.jsx'
import { certificates, education } from '../data.jsx'

export default function CertsAndEducation() {
  const [ref, inView] = useReveal()

  return (
    <section id="certificates-education">
      <div ref={ref} className={`wrap reveal${inView ? ' in' : ''}`}>
        <div className="two-col">
          <div id="certificates">
            <div className="section-head">
              <span className="section-num">· Certificates</span>
              <h2>Learning, logged.</h2>
            </div>
            <Timeline items={certificates} />
          </div>

          <div id="education">
            <div className="section-head">
              <span className="section-num">· Education</span>
              <h2>Where the foundations came from.</h2>
            </div>
            <Timeline items={education} />
          </div>
        </div>
      </div>
    </section>
  )
}
