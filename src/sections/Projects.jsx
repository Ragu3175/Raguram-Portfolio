import { RevealOnScroll } from "../components/RevealOnScroll";
import { BriefcaseBusiness, MessageSquareMore, ShieldCheck, ListTodo } from "lucide-react";

export const Projects = () => {
    const projects = [
        {
            name: "WorkNest",
            icon: BriefcaseBusiness,
            iconBg: "#2563eb",
            title: "Task Assignment & Team Management App",
            desc: "Real-time team collaboration platform where users can create teams, add members, and assign tasks with live updates using Socket.IO.",
            features: ["Team creation", "Add/remove team members", "Assign and manage tasks", "Real-time updates using Socket.IO", "JWT Authentication", "RESTful APIs"],
            tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT"],
            link: "https://task-assignment-app-delta.vercel.app/"
        },
        {
            name: "SafeDrive AI",
            icon: ShieldCheck,
            iconBg: "#7c3aed",
            title: "Multi-Violation Detection System – Web Dashboard",
            desc: "Real-time web dashboard (Final Year Project) to monitor and visualize multiple violation events from device-side streams.",
            features: ["Event-driven Node.js backend", "Responsive UI", "Concurrent data stream handling", "Scalable system design", "Integrated device-side data transmission"],
            tech: ["Node.js", "JavaScript", "HTML", "CSS", "MongoDB"],
            link: "https://final-year-project-three-red.vercel.app/"
        },
        {
            name: "QuickPing",
            icon: MessageSquareMore,
            iconBg: "#059669",
            title: "Real-Time Messaging Application",
            desc: "Full-stack real-time messaging application with low-latency bidirectional communication and containerized architecture.",
            features: ["Low-latency bidirectional communication", "JWT-based authentication", "Modular backend architecture", "Docker containerized backend", "CI/CD using GitHub Actions", "Deployed on AWS EC2"],
            tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Docker", "AWS"],
            link: "#",
            demoOffline: true
        },
        {
            name: null,
            icon: ListTodo,
            iconBg: "#d97706",
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
                        {projects.map((project, index) => {
                            const Icon = project.icon;
                            return (
                                <div key={index} className="glass project-card glass-hover">
                                    {/* Icon bubble */}
                                    {/* Icon + Name row */}
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "0.85rem" }}>
                                        <div style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: "46px",
                                            height: "46px",
                                            borderRadius: "12px",
                                            background: project.iconBg,
                                            flexShrink: 0,
                                            boxShadow: `0 4px 12px ${project.iconBg}55`
                                        }}>
                                            <Icon size={22} color="#fff" strokeWidth={2} />
                                        </div>
                                        <div>
                                            {project.name && (
                                                <h3 className="gradient-text" style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "0.1rem" }}>
                                                    {project.name}
                                                </h3>
                                            )}
                                            <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", fontStyle: "italic" }}>{project.title}</p>
                                        </div>
                                    </div>
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

                                    {project.link && !project.demoOffline && (
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
                                    {project.demoOffline && (
                                        <span
                                            title="Instance currently paused due to AWS EC2 cost — was live on EC2"
                                            style={{
                                                display: "inline-block",
                                                marginTop: "1.5rem",
                                                padding: "0.75rem 1.75rem",
                                                borderRadius: "0.5rem",
                                                background: "rgba(156,163,175,0.15)",
                                                color: "#6b7280",
                                                border: "1px solid rgba(156,163,175,0.3)",
                                                fontWeight: "600",
                                                fontSize: "0.9rem",
                                                cursor: "not-allowed",
                                                userSelect: "none"
                                            }}
                                        >
                                            Live Demo (Offline) ⚠
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
