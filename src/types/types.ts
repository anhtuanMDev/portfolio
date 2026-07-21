export type SkillsSet = {
    name: string,
    level: number,
}

export type TestimonialsInfo = {
    name: string,
    role: string,
    content: string,
    rating: number,
}

export type ProjectImages = {
    cover: string; // The main thumbnail for grids
    logo?: string; // The app logo used in headers
    gallery?: string[]; // Array of screenshots for the detail page
};

export type ProjectInfo = {
    id: number,
    title: string,
    status: string,
    category: string,
    description: string,
    images: ProjectImages,
    techStack: string[],
    link: string,
}
