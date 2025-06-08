import React, { useState, useEffect } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

export const CustomCursor: React.FC = () => {
    const { x, y } = useMousePosition();
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.matches('a, button, .project-card, .skill-item')) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.matches('a, button, .project-card, .skill-item')) {
                setIsHovering(false);
            }
        };

        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <>
            <div
                className="cursor"
                style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: isHovering ? 'scale(2)' : 'scale(1)',
                }}
            />
            <div
                className="cursor-follower"
                style={{
                    left: `${x - 10}px`,
                    top: `${y - 10}px`,
                    transform: isHovering ? 'scale(1.5)' : 'scale(1)',
                }}
            />
        </>
    );
};