import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
    const socialLinks = [
        { icon: <Github size={24} />, href: 'https://github.com', title: 'GitHub' },
        { icon: <Linkedin size={24} />, href: 'https://linkedin.com', title: 'LinkedIn' },
        { icon: <Mail size={24} />, href: 'mailto:derrel@example.com', title: 'Email' },
        { icon: <Twitter size={24} />, href: 'https://twitter.com', title: 'Twitter' },
    ];

    return (
        <footer>
            <div className="social-links">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        className="social-link"
                        title={link.title}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
            <p className="footer-text">
                © 2024 Derrel Tedianto. Built with precision and passion.
            </p>
        </footer>
    );
};