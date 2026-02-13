import { useState } from "react";
import { RevealOnScroll } from "../components/RevealOnScroll";
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // emailjs.sendForm(...) 
        alert("Message sent! (Mock)");
    };

    return (
        <section id="contact" className="section">
            <RevealOnScroll>
                <div className="container" style={{ maxWidth: "600px" }}>
                    <h2 className="gradient-text" style={{ textAlign: "center", fontSize: "2rem", marginBottom: "2rem" }}>
                        Get In Touch
                    </h2>

                    <form className="glass" style={{ padding: "2rem" }} onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Name"
                                className="form-input"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                placeholder="Email"
                                className="form-input"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <textarea
                                placeholder="Message"
                                className="form-textarea"
                                rows="5"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};
