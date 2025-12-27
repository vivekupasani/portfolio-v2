import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const MotionLink = motion(Link);

interface ProjectTileProps {
    projectName: string;
    imageSrc: string;
    desc: string;
    link: string;
}

export const ProjectTile = ({
    imageSrc,
    projectName,
    desc,
    link,
}: ProjectTileProps) => {
    return (
        <MotionLink
            href={link}
            target="_blank"
            className="flex flex-col gap-1 px-3 -mx-3 py-2 rounded-lg border border-transparent hover:border-zinc-200 hover:bg-zinc-50 transition-colors group"
            whileHover={{ y: -2 }}
            transition={{ type: "spring" as const, stiffness: 280 }}
        >
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                    <Image
                        src={imageSrc}
                        alt={projectName}
                        height={25}
                        width={25}
                        className="h-6.25 w-6.25 rounded-full border border-zinc-200"
                    />
                    <span className="font-medium text-zinc-900 group-hover:text-blue-600 transition-colors">
                        {projectName}
                    </span>
                </div>

                <ArrowUpRight className="size-4 text-zinc-400 group-hover:text-blue-500 transition-colors" />
            </div>

            <p className="text-sm text-zinc-500 leading-normal pl-8">
                {desc}
            </p>
        </MotionLink>
    );
};
