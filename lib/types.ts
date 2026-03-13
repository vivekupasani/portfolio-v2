export interface Project {
    projectName: string;
    imageSrc: string;
    desc: string;
    link: string;
    timeline: string,
    category: string
    timelineMobile: string,
    categoryMobile: string
    slug: string;
    techStack: string[];
    details: string[];
}

export interface Work {
    companyName: string,
    imageSrc: string,
    role: string,
    link: string
    timeline: string,
    location: string
    timelineMobile: string,
    locationMobile: string
    slug: string;
    techStack: string[];
    details: string[];
}

export interface Social {
    name: string,
    link: string
}

