import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import './styles/globals.css';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* Loading Screen */}
            <div className={`loader ${!isLoading ? 'hidden' : ''}`}>
                <div className="loader-circle"></div>
            </div>

            {/* Custom Cursor */}
            <CustomCursor />

            {/* Animated Background */}
            <div className="bg-animation">
                <div className="gradient-orb orb1"></div>
                <div className="gradient-orb orb2"></div>
                <div className="gradient-orb orb3"></div>
            </div>

            {/* Main Content */}
            <Navigation />
            <HeroSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactForm />
            <Footer />
        </>
    );
}

export default App;