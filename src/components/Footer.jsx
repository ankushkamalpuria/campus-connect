import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer glass">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-logo">Intern<span className="accent">Hub</span></h3>
                        <p className="footer-text">Connecting students with top tech opportunities worldwide.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Links</h4>
                        <ul className="footer-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/internships">Internships</a></li>
                            <li><a href="/disclaimer">Disclaimer</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Contact</h4>
                        <p>ankushkamalpuria@gmail.com</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Tech Internship Hub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
