import { RevealOnScroll } from "../components/RevealOnScroll";

export const Education = () => {
    return (
        <section id="education" className="section">
            <RevealOnScroll>
                <div className="container" style={{ maxWidth: "800px" }}>
                    <h2 className="gradient-text" style={{ textAlign: "center", fontSize: "2rem", marginBottom: "3rem" }}>
                        Education
                    </h2>
                    <div className="glass" style={{ padding: "2rem", position: "relative" }}>
                        <div
                            style={{
                                position: "absolute",
                                left: "0",
                                top: "0",
                                bottom: "0",
                                width: "4px",
                                background: "var(--neon-blue)",
                                borderRadius: "4px 0 0 4px"
                            }}
                        ></div>
                        <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                            Kalaignarkarunanidhi Institute of Technology, Coimbatore
                        </h3>
                        <p style={{ color: "var(--neon-blue)", fontWeight: "600", marginBottom: "0.5rem" }}>
                            B.E. – Electronics and Communication Engineering
                        </p>
                        <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
                            CGPA: 7.8
                        </p>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
