import { RevealOnScroll } from "../components/RevealOnScroll";

export const Certifications = () => {
    return (
        <section id="certifications" className="section">
            <RevealOnScroll>
                <div className="container">
                    <h2 className="gradient-text" style={{ textAlign: "center", fontSize: "2rem", marginBottom: "2rem" }}> Education & Certifications </h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="glass timeline-content">
                                <span className="timeline-date"> 2020 - 2024 </span>
                                <h3 className="timeline-title"> B.E in Computer Science </h3>
                                <p className="timeline-org"> Anna University, Chennai </p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="glass timeline-content">
                                <span className="timeline-date"> 2023 </span>
                                <h3 className="timeline-title"> AWS Certified Solutions Architect </h3>
                                <p className="timeline-org"> Amazon Web Services </p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="glass timeline-content">
                                <span className="timeline-date"> 2022 </span>
                                <h3 className="timeline-title"> Meta Front-End Developer Professional Certificate </h3>
                                <p className="timeline-org"> Coursera / Meta </p>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
