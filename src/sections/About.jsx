import { RevealOnScroll } from "../components/RevealOnScroll";

export const About = () => {
    return (
        <section id="about" className="section">
            <RevealOnScroll>
                <div className="container" style={{ maxWidth: "800px" }}>
                    <h2 className="gradient-text" style={{ textAlign: "center", fontSize: "2rem", marginBottom: "2rem" }}>
                        About Me
                    </h2>

                    <div className="glass" style={{ padding: "2.5rem", textAlign: "center" }}>
                        <p style={{ color: "var(--text-primary)", fontSize: "1.125rem", lineHeight: "1.8" }}>
                            I am a dedicated Full Stack Developer with a passion for building
                            high-performance web applications. I specialize in the MERN stack
                            (MongoDB, Express, React, Node.js) and have a strong interest in
                            real-time communication systems using Socket.io. I focus on writing
                            clean, scalable code and delivering intuitive user experiences
                            that solve real-world problems.
                        </p>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
