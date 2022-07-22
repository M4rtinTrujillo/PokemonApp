import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Pokemones from './assets/Pokemones'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Pokemones></Pokemones>
    </div>
  )
}

export default App
