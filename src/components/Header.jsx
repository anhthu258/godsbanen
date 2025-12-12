import "../Header.css";
import { Link } from "react-router";
import { useState } from "react";

function Header({ variant = "default" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header header--${variant}`}>
      <Link to="/" className="logo">
        <img src="./images/godsbanenlogo.svg" alt="Godsbanen Logo" />
      </Link>

      <nav>
        <button className="burger-button" aria-label="Menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={closeMenu}>Hjem</Link></li>
          <li><Link to="/workshop" onClick={closeMenu}>Værksteder</Link></li>
          <li><Link to="/events" onClick={closeMenu}>Events</Link></li>
          <li><Link to="/booking" onClick={closeMenu}>Booking</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
