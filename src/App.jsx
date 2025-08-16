import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const projectList = [
    { title: "SIEM Lab", description: "A virtualized SIEM lab.", link: "https://github.com/iliaschr/SIEM-lab" },
    { title: "Network File System", description: "A simple network file system in C.", link: "https://github.com/iliaschr/NFS-System" },
    { title: "Binary Exploitation", description: "A collection of writeups.", link: "https://github.com/iliaschr/write-ups" }
  ]

  return (
    <div>
      <Header />
      <About name="Ilias Chrysogelos" bio="I'm a computer science student." />
      <Projects projects={projectList} />
      <Contact />
    </div>
  )
}

export default App
