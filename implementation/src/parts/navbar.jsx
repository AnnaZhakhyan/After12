import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo" onClick={closeMenu}>
        AFTER12<span>®</span>
      </NavLink>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? "CLOSE −" : "MENU +"}
      </button>

      <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        <NavLink to="/experience" onClick={closeMenu}>
          EXPERIENCE
        </NavLink>

        <NavLink to="/schedule" onClick={closeMenu}>
          SCHEDULE
        </NavLink>

        <a href="/#lineup" onClick={closeMenu}>
          LINEUP
        </a>

        <a href="/#details" onClick={closeMenu}>
          DETAILS
        </a>
      </div>

     <NavLink
  className="nav-ticket"
  to="/tickets"
  onClick={closeMenu}
>
  GET TICKETS <span>↗</span>
</NavLink>
    </nav>
  );
}