export const Footer = () => {
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
                        gap: "2rem",
                        flexWrap: "wrap",
                        marginBottom: "2rem"
                    }}
                >
                    <a href="mailto:ragu317317@gmail.com" className="nav-link" style={{ textDecoration: "none" }}>
                        📧 ragu317317@gmail.com
                    </a>
                    <a href="tel:+919489624436" className="nav-link" style={{ textDecoration: "none" }}>
                        📞 +91 94896 24436
                    </a>
                    <a href="https://www.linkedin.com/in/raguram-r-92504a286" target="_blank" rel="noreferrer" className="nav-link" style={{ textDecoration: "none" }}>
                        💼 LinkedIn
                    </a>
                    <a href="https://github.com/Ragu3175" target="_blank" rel="noreferrer" className="nav-link" style={{ textDecoration: "none" }}>
                        🐙 GitHub
                    </a>
                </div>

                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
                    &copy; {new Date().getFullYear()} Raguram R.
                </p>
            </div>
        </footer>
    );
};
