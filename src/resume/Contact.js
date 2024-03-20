import React from 'react';
import './SectionStyles.css'; // Use the same CSS if it's general enough or create a specific one for the contact section

function Contact() {
    return (
        <div className="section contact-section">
            <h3 className="section-title">Contact</h3>
            <div className="section-content">
                <div className="contact-container">
                    <div className="contact-info">
                        <h4>Email</h4>
                        <p>your.email@example.com</p>
                    </div>
                    <div className="contact-info">
                        <h4>Phone</h4>
                        <p>+123 456 7890</p>
                    </div>
                    <div className="contact-info">
                        <h4>LinkedIn</h4>
                        <p><a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">yourprofile</a></p>
                    </div>
                    <div className="contact-info">
                        <h4>GitHub</h4>
                        <p><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">yourusername</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
