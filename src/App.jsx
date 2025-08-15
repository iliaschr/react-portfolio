import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  const projectList = [
    { title: "SIEM Lab", description: "A virtualized SIEM lab." },
    { title: "Network File System", description: "A simple network file system writeen in C." },
    { title: "Binary Exploitation projects", description: "A list of writeups." }
  ]
  return (
    <div>
      <Header />
      <About 
        name="me" 
        bio="I'm a computer science student." 
      />
      <Projects projects={projectList} />
    </div>
  )
}

export default App
