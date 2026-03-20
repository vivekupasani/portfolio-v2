import { ArrowUpRight, ExternalLink, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Project } from "@/lib/types";

const MotionLink = motion(Link);

interface ProjectTileProps {
    project: Project;
    showTechStack?: boolean;
}

export const ProjectTile = ({
    project,
    showTechStack = false
}: ProjectTileProps) => {
    return (
        <MotionLink
            href={`/projects/${project.slug}`}
            className="flex items-start md:items-center gap-4 py-3 px-4 -mx-4 rounded-lg hover:bg-zinc-100 transition-all duration-200 group"
            transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
        >
            {/* <div className="relative shrink-0 mt-1 md:mt-0">
                <Image
                    src={project.imageSrc}
                    alt={project.projectName}
                    height={36}
                    width={36}
                    className="size-9 rounded-lg border border-zinc-200"
                />
            </div> */}

            <div className="flex items-center justify-between w-full">

                {/* LEFT SIDE */}
                <div className="flex flex-col">
                    <span className="flex items-center gap-2 font-medium text-zinc-900 text-[15px]">
                        {project.projectName}
                    </span>

                    <p className="text-[13px] text-zinc-400 leading-normal">
                        {project.desc}
                    </p>
                    {showTechStack && (
                        <div className="flex flex-wrap gap-1 mt-1 text-[11px] text-zinc-400/80">
                            {project.techStack.join(" • ")}
                        </div>
                    )}
                    <span className="flex md:hidden text-neutral-300 font-normal text-sm">{project.timelineMobile}</span>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-col items-end justify-center text-right">

                    {/* DESKTOP */}
                    <div className="hidden md:flex flex-col items-end">
                        <span className="text-[13px] font-medium text-zinc-600">
                            {project.timeline}
                        </span>
                        <span className="text-[13px] text-zinc-400">
                            {project.category}
                        </span>
                    </div>

                </div>

            </div>
        </MotionLink>
    );
};