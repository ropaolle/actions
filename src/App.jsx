import { useState } from "react";
import reactLogo from "./assets/react.svg";
// eslint-disable-next-line import/no-unresolved
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
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
      <h3>{process.env.CF_PAGES_BRANCH}</h3>
      <h3>{process.env.CF_PAGES_URL}</h3>
      <h3>{process.env.CUSTOM_VAR}</h3>
      <h3>{import.meta.env.VITE_SOME_KEY}</h3>
      <h3>{import.meta.env.VITE_SOME_KEY2}</h3>
      <h3>{import.meta.env.VITE_SOME_KEY3}</h3>
      <h3>{import.meta.env.VITE_SOME_KEY4}</h3>
      <h3>{import.meta.env.VITE_CUSTOM_VAR}</h3>
      <h3>{import.meta.env.VITE_CUSTOM_VAR2}</h3>
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
  );
}

export default App;
