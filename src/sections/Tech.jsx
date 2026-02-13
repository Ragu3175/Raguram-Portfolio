import { RevealOnScroll } from "../components/RevealOnScroll";

export const Tech = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Responsive UI", "Component-Based Architecture"]
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express.js", "RESTful API Development", "JWT Authentication & Authorization"]
        },
        {
            title: "Databases",
            skills: ["MongoDB", "PostgreSQL"]
        },
        {
            title: "DevOps & Cloud",
            skills: ["AWS", "Docker", "GitHub Actions (CI/CD)"]
        },
        {
            title: "Programming Languages",
            skills: ["Java", "JavaScript"]
        },
        {
            title: "Tools",
            skills: ["Git", "GitHub", "VS Code"]
        }
    ];

    return (
        <section id="skills" className="section">
            <RevealOnScroll>
                <div className="container">
                    <h2 className="gradient-text" style={{ textAlign: "center", fontSize: "2rem", marginBottom: "3rem" }}>
                        Technical Skills
                    </h2>

                    <div className="skills-grid">
                        {skillCategories.map((cat, index) => (
                            <div key={index} className="glass skill-card">
                                <h3 className="skill-category">{cat.title}</h3>
                                <div className="skill-list">
                                    {cat.skills.map((skill, sIndex) => (
                                        <span key={sIndex} className="skill-item">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
