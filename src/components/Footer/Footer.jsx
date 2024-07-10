import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'


const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return <footer className={`header-${theme}`}>
    <p>Este es el footer</p>
    <p>@copyright FS 2024</p>
  </footer>;
};

export default Footer;
