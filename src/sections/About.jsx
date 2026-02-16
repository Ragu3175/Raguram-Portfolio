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
                        <div style={{ color: "var(--text-primary)", fontSize: "1.125rem", lineHeight: "1.8", textAlign: "left" }}>
                            <p style={{ marginBottom: "1.5rem" }}>
                                I am a dedicated Software Engineer passionate about designing and building scalable, high-performance applications. I focus on writing clean, maintainable, and efficient code while developing reliable systems that solve real-world problems.
                            </p>
                            <p>
                                With a strong foundation in problem-solving and system thinking, I aim to create structured, well-architected solutions that are both robust and adaptable. I continuously strive to improve performance, optimize system design, and deliver software that provides meaningful impact and long-term value.
                            </p>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
