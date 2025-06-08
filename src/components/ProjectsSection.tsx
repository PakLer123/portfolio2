import React from 'react';
import { ProjectCard } from './ProjectCard';
import type {Project} from '../types';

export const ProjectsSection: React.FC = () => {
    const projects: Project[] = [
        {
            id: 1,
            icon: '⚡',
            title: 'High-Performance API',
            description: 'Scalable microservices architecture handling millions of requests with sub-second response times and 99.9% uptime.',
            tags: ['Go', 'gRPC', 'Kubernetes'],
            github: 'https://github.com',
            link: 'https://example.com',
        },
        {
            id: 2,
            icon: '🔧',
            title: 'DevOps Pipeline',
            description: 'Automated CI/CD pipeline reducing deployment time by 80% with comprehensive testing and monitoring integration.',
            tags: ['Docker', 'Jenkins', 'AWS'],
            github: 'https://github.com',
        },
        {
            id: 3,
            icon: '💡',
            title: 'Real-time Analytics',
            description: 'Data processing engine analyzing billions of events in real-time with interactive dashboards and predictive insights.',
            tags: ['Python', 'Kafka', 'Spark'],
            link: 'https://example.com',
        },
    ];

    return (
        <section className="projects" id="projects">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};