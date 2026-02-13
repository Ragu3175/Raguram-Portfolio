import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen, isDarkMode, setIsDarkMode }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <a href="#home" className="nav-logo">
          {"<Raguram />"}
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button
            className="theme-toggle"
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>

          <div
            className="mobile-menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            style={{ fontSize: "1.5rem", cursor: "pointer", color: "var(--text-primary)" }}
          >
            &#9776;
          </div>

          <div className="nav-links">
            <a href="#home" className="nav-link"> Home </a>
            <a href="#about" className="nav-link"> About </a>
            <a href="#skills" className="nav-link"> Skills </a>
            <a href="#projects" className="nav-link"> Projects </a>
            <a href="#education" className="nav-link"> Education </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
