import ProjectCard from './ProjectCard'

function Projects({ projects }) {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p, index) => (
          <ProjectCard key={index} {...p} />
        ))}
      </div>
    </section>
  )
}

export default Projects
