import { link } from "fs";

interface Project {
    projectName: string;
    imageSrc: string;
    desc: string;
    link: string;
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
    },
    {
        projectName: "instakit",
        imageSrc: "https://imgs.search.brave.com/eSvUIttMIjrULs2GO_t5QrN6QcHujXW_e21glSKnxXg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucHJpc21pYy5p/by9tZWx0d2F0ZXIv/ZmQ1NzMwMzMtZmI3/ZC00YWU0LWIwZjQt/M2I3MWQ0M2RmZWFk/X0Jsb2ctMTUwMHg4/MTMtTWVkaWEtS2l0/LnBuZz9xPTkwJnJl/Y3Q9MTQwLDAsMTIy/MCw4MTMmJnc9MTky/MCZkcHI9MQ",
        desc: "generate your media kit in seconds.",
        link: "https://www.instakit.live/"
    }
]