function Projects({ projects }) {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      {projects.map((project, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  )
}

export default Projects