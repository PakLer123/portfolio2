import React from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import type {NavLink} from '../types';

export const Navigation: React.FC = () => {
    const scrollPosition = useScrollPosition();
    const navLinks: NavLink[] = [
        { href: '#home', label: 'Home' },
        { href: '#projects', label: 'Projects' },
        { href: '#skills', label: 'Skills' },
        { href: '#contact', label: 'Contact' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={scrollPosition > 50 ? 'scrolled' : ''}>
            <div className="nav-container">
                <div className="logo">DT</div>
                <ul className="nav-links">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};