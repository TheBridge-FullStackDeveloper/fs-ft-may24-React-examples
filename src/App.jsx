import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  const inputRef = useRef(null); // Referencia al input

  const handleButtonClick = () => {
    alert(`Valor del input: ${inputRef.current.value}`);
  };

  // Estado
  const [count, setCount] = useState(100);

  return (
    <>
      <Header />
      <Main />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + tortilla </h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          El contador vale {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleButtonClick}>Obtener Valor</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </>
  );
}

export default App;
