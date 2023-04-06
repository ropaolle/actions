import { useState } from "react"
import reactLogo from "./assets/react.svg"
// eslint-disable-next-line import/no-unresolved
import viteLogo from "/vite.svg"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  console.info(process.env)
  console.info(import.meta)
  console.info(import.meta.env)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + GitHub Actions</h1>
      <h3>
        Build environment: {import.meta.env.VITE_BUILD_ENVIRONMENT || "?"}
      </h3>
      <small>import.meta.env.VITE_BUILD_ENVIRONMENT</small>
      <h3>VITE_DOTENV_KEY: {import.meta.env.VITE_DOTENV_KEY || "?"}</h3>
      <small>import.meta.env.VITE_DOTENV_KEY</small>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
