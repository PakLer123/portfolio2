import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import type {Project} from '../types';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="project-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="project-icon">{project.icon}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
                {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
            {isHovered && (
                <div className="project-links">
                    {project.github && (
                        <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                            <Github size={20} />
                        </a>
                    )}
                    {project.link && (
                        <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            )}
        </div>
    );
};