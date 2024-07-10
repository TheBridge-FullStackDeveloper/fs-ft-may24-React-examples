import { BrowserRouter } from "react-router-dom";
import { useContext, useState } from "react";
//import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

// Importamos el contexto
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("night"); // "day" or "night"

  // Cambiamos el tema
  const toggleTheme = () => setTheme(theme === "day" ? "night" : "day");

  const themeData = {
    theme,
    toggleTheme
  }

  return (
    <>
      <ThemeContext.Provider value={themeData}>
        <BrowserRouter>
          <Header />
          <Main />
        </BrowserRouter>

        <Footer />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
