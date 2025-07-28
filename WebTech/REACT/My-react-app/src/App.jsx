import { useState } from 'react'
import reactLogo from './assets/SVG2.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.cuemath.com/multiplication-tables/5-times-table/" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Click to multiply count by 5</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 5)}>
          count is {count}
        </button>
        <p>
          Learn Table of 5
        </p>
      </div>
      <p className="read-the-docs">
        Click on the counter if you are illegible to multiply by 5.
      </p>
    </>
  )
}

export default App
