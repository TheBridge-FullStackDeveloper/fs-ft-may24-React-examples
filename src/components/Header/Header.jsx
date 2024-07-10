import { useContext } from 'react'
import Nav from "./Nav";
import { ThemeContext } from '../../context/ThemeContext'

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return <header className={`header-${theme}`}>
    <Nav/>
    <button onClick={() => toggleTheme()}>{theme === "day" ? "\u{1F319}" : "\u{2600}"}</button>
    </header>;
};

export default Header;
