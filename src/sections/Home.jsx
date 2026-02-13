import { RevealOnScroll } from "../components/RevealOnScroll";
import profilePic from "../assets/Profile.jpeg";

export const Home = () => {
    return (
        <section id="home" className="section">
            <RevealOnScroll>
                <div className="container" style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4rem",
                    flexWrap: "wrap"
                }}>
                    <div className="home-content" style={{ flex: "1", minWidth: "300px", textAlign: "left" }}>
                        <h1 className="gradient-text" style={{ fontSize: "clamp(2.5rem, 8vw, 4rem)", marginBottom: "0.25rem", fontWeight: "700" }}>
                            Raguram R
                        </h1>

                        <h2 style={{ fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "1rem", fontWeight: "600" }}>
                            Full Stack Developer
                        </h2>

                        <p style={{ color: "var(--text-secondary)", fontSize: "1.125rem", marginBottom: "2.5rem", maxWidth: "500px", lineHeight: "1.6" }}>
                            I am a dedicated developer focused on building high-performance web applications.
                            I specialize in the MERN stack and real-time communication systems.
                        </p>

                        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", marginBottom: "2.5rem" }}>
                            📍 Karur, India
                        </p>

                        <div style={{ display: "flex", gap: "1.5rem" }}>
                            <a href="#projects" className="btn btn-primary">
                                View Projects
                            </a>
                            <a href="#contact" className="btn btn-secondary">
                                Contact Me
                            </a>
                        </div>
                    </div>

                    <div className="home-image" style={{ flexShrink: "0" }}>
                        <img
                            src={profilePic}
                            alt="Raguram R"
                            className="profile-pic"
                            style={{
                                width: "clamp(250px, 35vw, 350px)",
                                height: "clamp(250px, 35vw, 350px)",
                                borderRadius: "1rem",
                                objectFit: "cover",
                                border: "3px solid var(--neon-blue)",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                                display: "block"
                            }}
                        />
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
