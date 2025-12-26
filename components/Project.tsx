import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectTileProps {
    projectName: string;
    imageSrc: string;
    desc: string;
    link: string;
}

export const ProjectTile = ({ imageSrc, projectName, desc, link }: ProjectTileProps) => {
    return (
        <Link
            href={link}
            target="_blank"
            className="flex flex-col gap-1  px-3 -mx-3 hover:bg-zinc-50 rounded-lg transition-all group border border-transparent hover:border-zinc-200"
        >
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                    <Image
                        src={imageSrc}
                        alt={projectName}
                        height={25}
                        width={25}
                        className="h-[25px] w-[25px] rounded-full border border-zinc-200"
                    />
                    <span className="font-medium text-zinc-900 group-hover:text-blue-600 transition-colors">{projectName}</span>
                </div>
                <ArrowUpRight className="size-4 text-zinc-400 group-hover:text-blue-500 transition-colors" />
            </div>
            <p className="text-zinc-500 text-sm pl-8 leading-normal">{desc}</p>
        </Link>
    );
}