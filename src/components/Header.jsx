import React, { useState , useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSun, faMoon, faXmark} from "@fortawesome/free-solid-svg-icons";
import logoDark from "../assets/logo-black.png";
import logoLight from "../assets/logo-white.png";

function Header({ dark, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      // Prevent scrolling on the body when the menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling on the body when the menu is closed
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div
      className={`sticky top-0 h-16 w-full flex justify-between items-center font-poppins px-10 lg:px-28 xl:px-35 ${
        dark ? "dark" : ""
      }`}
    >
      <img src={dark ? logoLight : logoDark} alt="Logo" className="w-12" />

      {/* Navigation Links */}
      <div className="hidden lg:flex font-medium text-base items-center gap-10">
        <a href="#home" className="hover:text-red-600">
          Home
        </a>
        <a href="#about" className="hover:text-red-500">
          About
        </a>
        <a href="#skills" className="hover:text-red-500">
          Skills
        </a>
        <a href="#contact" className="hover:text-red-500">
          Contact
        </a>
        <button onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
          {dark ? (
            <FontAwesomeIcon
              icon={faSun}
              className="text-red-500 hover:text-red-300"
            />
          ) : (
            <FontAwesomeIcon
              icon={faMoon}
              className="text-red-500 hover:text-red-300"
            />
          )}
        </button>
      </div>

      {/* Bars Icon */}
      <div className="block lg:hidden">
        <FontAwesomeIcon
          icon={faBars}
          aria-label="Menu"
          onClick={toggleMenu}
        />
      </div>
      {menuOpen && <Menu dark={dark} toggleDarkMode={toggleDarkMode} toggleMenu={toggleMenu}/>}
    </div>
  );
}

function Menu({ dark, toggleDarkMode, toggleMenu }) {  {/* Fixed: Added destructuring of props */}
  return (
    <div className="absolute flex flex-col justify-center items-center w-full h-screen top-0 left-0 bg-white dark:bg-black gap-10 lg:hidden">
      <button>
        <FontAwesomeIcon
          icon={faXmark}
          className="absolute top-6 right-10 text-red-500 text-xl"
          onClick={() => toggleMenu()}
        />
      </button>
      <a href="#home" className="text-xl">
        Home
      </a>
      <a href="#about" className="text-xl">
        About
      </a>
      <a href="#skills" className="text-xl">
        Skills
      </a>
      <a href="#contact" className="text-xl">
        Contact
      </a>
      <button onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
        {dark ? (
          <FontAwesomeIcon
            icon={faSun}
            className="text-xl text-red-500"
          />
        ) : (
          <FontAwesomeIcon
            icon={faMoon}
            className="text-xl text-red-500"
          />
        )}
      </button>
    </div>
  );
}

export default Header;
