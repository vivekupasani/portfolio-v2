import { ArrowUpRight } from "lucide-react";
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
            className="group relative flex items-start md:items-center gap-2 py-2 px-2 -mx-2 rounded-lg transition-colors duration-200 hover:bg-zinc-50"
            transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
        >
            <div className="flex items-center justify-between w-full">
                <div className="flex flex-col gap-0.5">
                    <span className="flex items-center gap-1 font-medium text-zinc-500 text-sm">
                        {project.projectName}
                        <ArrowUpRight size={12} className="text-zinc-300 -translate-y-0.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                    </span>
                    <p className="text-[13px] text-zinc-500 leading-normal">
                        {project.desc}
                    </p>
                    <span className="flex md:hidden text-[12px] text-zinc-500">{project.timelineMobile}</span>
                    {/* {showTechStack && (
                        <div className="flex flex-wrap gap-1 mt-1 text-[11px] text-zinc-300">
                            {project.techStack.join(" · ")}
                        </div>
                    )} */}
                </div>

                <div className="hidden md:flex flex-col items-end text-right shrink-0">
                    <span className="text-[12px] font-medium text-zinc-500">
                        {project.timeline}
                    </span>
                    <span className="text-[12px] text-zinc-500">
                        {project.category}
                    </span>
                </div>
            </div>
        </MotionLink>
    );
};
