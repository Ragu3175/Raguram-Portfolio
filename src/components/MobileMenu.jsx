export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={`mobile-menu ${menuOpen ? "open" : "closed"}`}>
            <button
                onClick={() => setMenuOpen(false)}
                className="mobile-menu-close"
                aria-label="Close Menu"
            >
                &times;
            </button>

            <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="mobile-nav-link"
            >
                Home
            </a>
            <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="mobile-nav-link"
            >
                About
            </a>
            <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="mobile-nav-link"
            >
                Skills
            </a>
            <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="mobile-nav-link"
            >
                Projects
            </a>
            <a
                href="#education"
                onClick={() => setMenuOpen(false)}
                className="mobile-nav-link"
            >
                Education
            </a>
            <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mobile-nav-link"
            >
                Contact
            </a>
        </div>
    );
};
