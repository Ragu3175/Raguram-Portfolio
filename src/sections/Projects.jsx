import { RevealOnScroll } from "../components/RevealOnScroll";

export const Projects = () => {
    const projects = [
        {
            title: "Task Assignment & Team Management App",
            desc: "Real-time team collaboration platform where users can create teams, add members, and assign tasks with live updates using Socket.IO.",
            features: ["Team creation", "Add/remove team members", "Assign and manage tasks", "Real-time updates using Socket.IO", "JWT Authentication", "RESTful APIs"],
            tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT"],
            link: "https://task-assignment-app-delta.vercel.app/"
        },
        {
            title: "Real-Time Messaging Application",
            desc: "Full-stack real-time messaging application with low-latency bidirectional communication and containerized architecture.",
            features: ["Low-latency bidirectional communication", "JWT-based authentication", "Modular backend architecture", "Docker containerized backend", "CI/CD using GitHub Actions", "Deployed on AWS"],
            tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Docker", "AWS"],
            link: null
        },
        {
            title: "Multi-Violation Detection System – Web Dashboard",
            desc: "Real-time web dashboard (Final Year Project) to monitor and visualize multiple violation events from device-side streams.",
            features: ["Event-driven Node.js backend", "Responsive UI", "Concurrent data stream handling", "Scalable system design", "Integrated device-side data transmission"],
            tech: ["Node.js", "JavaScript", "HTML", "CSS", "MongoDB"],
            link: null
        },
        {
            title: "To-Do List & Contact Management API",
            desc: "Secure RESTful APIs supporting full CRUD operations for user-specific tasks and contacts with modular backend services.",
            features: ["JWT Authentication", "Modular backend services", "CRUD operations", "Input validation", "Secure API handling"],
            tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
            link: null
        }
    ];

    return (
        <section id="projects" className="section">
            <RevealOnScroll>
                <div className="container">
                    <h2 className="gradient-text" style={{ textAlign: "center", fontSize: "2rem", marginBottom: "3rem" }}>
                        Featured Projects
                    </h2>

                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div key={index} className="glass project-card glass-hover">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.desc}</p>

                                <ul style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginBottom: "1.5rem", listStyle: "inside disc" }}>
                                    {project.features.slice(0, 4).map((feat, fIndex) => (
                                        <li key={fIndex}>{feat}</li>
                                    ))}
                                </ul>

                                <div className="project-tech">
                                    {project.tech.map((t, tIndex) => (
                                        <span key={tIndex} className="badge">{t}</span>
                                    ))}
                                </div>

                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-primary"
                                        style={{ marginTop: "1.5rem", textAlign: "center" }}
                                    >
                                        Live Demo →
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
