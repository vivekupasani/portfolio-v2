import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Work } from "@/lib/types";

const MotionLink = motion(Link);

interface WorkedAtProps {
    work: Work
}

export const WorkedAt = ({
    work
}: WorkedAtProps) => {
    return (
        <MotionLink
            href={`/work/${work.slug}`}
            className="flex items-start md:items-center gap-4 py-3 px-4 -mx-4 rounded-lg hover:bg-zinc-100 transition-all duration-200 group"
            transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
        >
            <div className="relative shrink-0 mt-1 md:mt-0">
                <Image
                    src={work.imageSrc}
                    alt={work.companyName}
                    height={36}
                    width={36}
                    className="size-9 rounded-lg border border-zinc-200"
                />
            </div>

            <div className="flex items-center justify-between w-full">
                <div className="flex flex-col">
                    <span className="flex gap-2 items-center justify-start font-medium text-zinc-900 text-[15px]">
                        {work.companyName}
                    </span>
                    <p className="text-sm text-zinc-500">{work.role}</p>
                    <span className="flex md:hidden text-zinc-400 font-normal text-sm">{work.timelineMobile}</span>
                </div>

                {/* RIGHT SIDE */}
                <div className="hidden md:flex flex-col items-end text-right">
                    <span className="text-[13px] font-medium text-zinc-600">
                        {work.timeline}
                    </span>
                    <span className="text-[13px] text-zinc-400">
                        {work.location}
                    </span>
                </div>

            </div>

        </MotionLink>
    );
};
