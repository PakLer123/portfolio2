import React, { useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useMousePosition } from '../hooks/useMousePosition';

export const HeroSection: React.FC = () => {
    const { x, y } = useMousePosition();
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleParallax = () => {
            if (!heroRef.current) return;

            const elements = heroRef.current.querySelectorAll('.floating-element');
            elements.forEach((el, index) => {
                const speed = (index + 1) * 20;
                const xPos = (x / window.innerWidth) * speed;
                const yPos = (y / window.innerHeight) * speed;
                (el as HTMLElement).style.transform = `translate(${xPos}px, ${yPos}px)`;
            });
        };

        handleParallax();
    }, [x, y]);

    return (
        <section className="hero" id="home" ref={heroRef}>
            <div className="floating-element"></div>
            <div className="floating-element"></div>
            <div className="floating-element"></div>

            <div className="hero-content">
                <p className="hero-subtitle">Hi, I'm</p>
                <h1 className="hero-title">
                    <span className="glitch" data-text="DERREL">DERREL</span><br/>
                    <span className="glitch" data-text="TEDIANTO">TEDIANTO</span>
                </h1>
                <p className="hero-description">
                    Software Developer crafting elegant solutions to complex problems
                </p>
                <div className="cta-container">
                    <a href="#projects" className="cta-button cta-primary">
                        View My Work
                    </a>
                    <a href="#contact" className="cta-button cta-secondary">
                        Get In Touch
                    </a>
                </div>
            </div>

            <div className="scroll-indicator">
                <ChevronDown className="scroll-icon" />
            </div>
        </section>
    );
};