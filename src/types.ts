// All TypeScript interfaces in one place
export interface Project {
    id: number;
    icon: string;
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
}

export interface Skill {
    name: string;
    icon: string;
    category: 'language' | 'framework' | 'tool' | 'database';
}

export interface NavLink {
    href: string;
    label: string;
}

export interface Position {
    x: number;
    y: number;
}