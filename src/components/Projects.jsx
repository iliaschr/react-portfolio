function Projects({ projects }) {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((p, index) => (
          <li key={index}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
