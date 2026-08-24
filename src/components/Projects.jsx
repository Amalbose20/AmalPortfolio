import useReveal from '../useReveal.jsx'
import { project } from '../data.jsx'

export default function Projects() {
  const [ref, inView] = useReveal()

  return (
    <section id="projects">
      <div ref={ref} className={`wrap reveal${inView ? ' in' : ''}`}>
        <div className="section-head">
          <span className="section-num">· Projects</span>
          <h2>What I'm building right now.</h2>
        </div>
        <div className="project-card">
          <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="stack-row">
              {project.stack.map((item) => (
                <span className="chip" key={item}>{item}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.linkHref} target="_blank" rel="noopener noreferrer">
                {project.linkLabel}
              </a>
            </div>
          </div>
          <span className="project-status">{project.status}</span>
        </div>
      </div>
    </section>
  )
}
