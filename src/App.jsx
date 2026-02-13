import { useState, useEffect } from "react";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { ParticleBackground } from "./components/ParticleBackground";
import { Home } from "./sections/Home";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Tech } from "./sections/Tech";
import { Footer } from "./components/Footer";
import { Education } from "./sections/Education";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (!isDarkMode) {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [isDarkMode]);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`app-container transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
          } ${isDarkMode ? "dark" : ""}`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <ParticleBackground />
        <Home />
        <About />
        <Tech />
        <Projects />
        <Education />
        <Footer />
      </div>
    </>
  );
}

export default App;
