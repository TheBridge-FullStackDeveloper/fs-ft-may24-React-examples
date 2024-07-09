import { useState, useRef } from "react";
import reactLogo from "../../../assets/react.svg";
import viteLogo from "../../../assets/vite.svg";

const Home = () => {
  const inputRef = useRef(null); // Referencia al input

  const handleButtonClick = () => {
    alert(`Valor del input: ${inputRef.current.value}`);
  };

  // Estado
  const [count, setCount] = useState(100);


  return <section className="home">

    <iframe className="video" src="https://www.youtube.com/embed/IbfbnjSHs3A?si=SKkgWTHIEr12eXWs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    <article>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </article>
    <article>
      <h1>Vite + React + tortilla </h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          El contador vale {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </article>
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Obtener Valor</button>

    </div>







  </section>;
};

export default Home;
