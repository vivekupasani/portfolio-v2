import { link } from "fs";

interface Project {
    projectName: string;
    imageSrc: string;
    desc: string;
    link: string;
    bg?: string;
}

export const ProjectList: Project[] = [
    {
        projectName: "cluezy",
        imageSrc: "/cluezy-logo.png",
        desc: "agentic ai research engine.",
        link: "https://cluezy.site"
    },
    {
        projectName: "hooked",
        imageSrc: "/hookd-logo.png",
        desc: "analyze your video to increase retention.",
        link: "https://www.hookd.live/"
    },
    {
        projectName: "drft marketing",
        imageSrc: "/drft-logo.png",
        desc: "influencer marketing that delivers.",
        link: "https://www.drftmarketing.com/",
        bg: "bg-black"
    },
    {
        projectName: "instakit",
        imageSrc: "/cluezy-logo.png",
        desc: "generate your media kit in seconds.",
        link: "https://www.instakit.live/"
    }
]