import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import {Experience} from './components/Experience'
import { Skills } from './components/Skills'
import {Projects} from './components/Projects'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      
      <div className="container">
      <Home/>

      <Experience/>
      <Skills/>
      <Projects/>

      </div>
      
    

    </>
  )
}

export default App
