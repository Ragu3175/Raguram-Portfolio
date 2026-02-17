import { Github, Linkedin, Mail, Eye, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export const Footer = () => {
    const [views, setViews] = useState(null);

    useEffect(() => {
        // Use a simple free counter API
        // Namespace could be the portfolio owner's name to avoid collisions
        const namespace = "raguram-portfolio";
        const key = "page-views";

        fetch(`https://api.counterapi.dev/v1/${namespace}/${key}/up`)
            .then(res => res.json())
            .then(data => setViews(data.count))
            .catch(err => console.error("Counter error:", err));
    }, []);

    return (
        <footer id="contact" className="glass" style={{ padding: "3rem 0", marginTop: "4rem", borderRadius: "0" }}>
            <div className="container" style={{ textAlign: "center" }}>
                <h2 className="gradient-text" style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>
                    Contact Me
                </h2>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "2.5rem",
                        flexWrap: "wrap",
                        marginBottom: "2rem"
                    }}
                >
                    <a href="mailto:ragu317317@gmail.com" className="social-icon" title="Email" style={{ textDecoration: "none", color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <div style={{
                            width: "28px",
                            height: "28px",
                            backgroundColor: "white",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                        }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H20V7.38l-8 5-8-5V21H1.5c-.85 0-1.5-.65-1.5-1.5V4.5c0-.85.65-1.5 1.5-1.5H4l8 5 8-5h1.5c.85 0 1.5.65 1.5 1.5z" fill="#EA4335" />
                                <path d="M0 4.5V19.5C0 20.35.65 21 1.5 21H4V7.38L0 4.5Z" fill="#4285F4" />
                                <path d="M24 4.5V19.5c0 .85-.65 1.5-1.5 1.5H20V7.38l4-2.88Z" fill="#34A853" />
                                <path d="M20 3.5L12 8.5 4 3.5V3h16v.5Z" fill="#FBBC05" />
                            </svg>
                        </div>
                        <span>ragu317317@gmail.com</span>
                    </a>
                    <a href="tel:+919489624436" className="social-icon" title="Phone" style={{ textDecoration: "none", color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <Phone size={20} color="#25D366" />
                        <span>+91 94896 24436</span>
                    </a>
                    <a href="https://www.linkedin.com/in/raguram-r-92504a286" target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn" style={{ textDecoration: "none", color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/Ragu3175" target="_blank" rel="noreferrer" className="social-icon" title="GitHub" style={{ textDecoration: "none", color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.292 24 17.81 24 12.5 24 5.87 18.627.5 12 .5z" />
                        </svg>
                        <span>GitHub</span>
                    </a>
                </div>

                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "2rem",
                        padding: "0.5rem 1.25rem",
                        borderRadius: "2rem",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "var(--text-primary)",
                        fontSize: "0.875rem",
                        transition: "all 0.3s ease"
                    }}
                >
                    <Eye size={16} className="gradient-text" />
                    <span style={{ fontWeight: "500" }}>Total Views: {views !== null ? views : "..."}</span>
                </div>

                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
                    &copy; {new Date().getFullYear()} Raguram R.
                </p>
            </div>
        </footer>
    );
};
