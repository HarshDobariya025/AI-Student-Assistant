import { Moon, Sun } from "lucide-react"
import "./Header.css"

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <h1>TechEdu Financial Aid</h1>
          <p>Supporting Tomorrow's Innovators</p>
        </div>
 
        <nav className="nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#eligibility">Eligibility</a>
            </li>
            <li>
              <a href="#apply">Apply</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <button
          className="theme-toggle"
          onClick={toggleDarkMode}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  )
}

export default Header

