import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import About from './components/About'

function App() {
  return (
    <div>
      <Header />
      <About 
        name="me" 
        bio="I'm a computer science student." 
      />
    </div>
  )
}

export default App
