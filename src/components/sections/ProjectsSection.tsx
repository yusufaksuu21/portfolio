import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="snap-section">
      <div className="section-inner">
        <Reveal>
          <p className="section-eyebrow">02 · Projeler</p>
          <div className="project-header">
            <h2 className="section-title">Projelerim</h2>
            <div className="github-box">
              <p className="github-text">
                Kodlarımın tamamına GitHub üzerinden ulaşabilirsiniz
              </p>
              <a
                href="https://github.com/yusufaksuu21"
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                <i className="fab fa-github"></i> GitHub Profilim
              </a>
            </div>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={Math.min(index * 40, 200)}>
              <article className="project-card">
                <div className="project-icon">
                  <i className={project.icon}></i>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-demo-link"
                  >
                    <i className="fas fa-external-link-alt"></i> Canlı Demo
                  </a>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
