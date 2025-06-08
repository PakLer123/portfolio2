import React, { useState } from 'react';
import { Skill } from '../types';

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="skill-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                borderColor: isHovered ? '#818cf8' : 'rgba(255, 255, 255, 0.05)',
            }}
        >
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
        </div>
    );
};

export const SkillsSection: React.FC = () => {
    const skills: Skill[] = [
        { name: 'Python', icon: '🐍', category: 'language' },
        { name: 'Java', icon: '☕', category: 'language' },
        { name: 'TypeScript', icon: '🟦', category: 'language' },
        { name: 'Go', icon: '🐹', category: 'language' },
        { name: 'PostgreSQL', icon: '🐘', category: 'database' },
        { name: 'Docker', icon: '🐳', category: 'tool' },
        { name: 'Kubernetes', icon: '☸️', category: 'tool' },
        { name: 'Redis', icon: '🔥', category: 'database' },
    ];

    return (
        <section className="skills" id="skills">
            <div className="skills-container">
                <h2 className="section-title">Technologies</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <SkillItem key={index} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
};