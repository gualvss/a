import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <button className="bg-blue-500 text-black">Olá Mundo</button>
      </div>
    </>
  )
}

export default App
