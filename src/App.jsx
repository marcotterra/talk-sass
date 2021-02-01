import React, { useState } from 'react'
import logo from './assets/images/logo.svg'
import './App.scss'

import Card from './card'
import CardDois from './card-dois'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>

        <p>
          <Card />
        </p>

        <p>
          <CardDois>Sou o segundo card</CardDois>
        </p>
      </header>
    </div>
  )
}

export default App
