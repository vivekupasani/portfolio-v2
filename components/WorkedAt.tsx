import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const MotionLink = motion(Link);

interface WorkedAtProps {
    imageSrc: string;
    companyName: string;
    role: string;
    link: string;
}

export const WorkedAt = ({
    imageSrc,
    companyName,
    role,
    link,
}: WorkedAtProps) => {
    return (
        <MotionLink
            href={link}
            target="_blank"
            className="flex items-center gap-4 py-3 px-4 -mx-4 rounded-lg border-l-2 border-transparent hover:border-blue-500 hover:bg-zinc-100/40 transition-all duration-200 group"
            whileHover={{ x: 2 }}
            transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
        >
            <div className="relative shrink-0">
                <Image
                    src={imageSrc}
                    alt={companyName}
                    height={36}
                    width={36}
                    className="size-9 rounded-lg border border-zinc-200"
                />
            </div>

            <div className="flex flex-col grow min-w-0">
                <span className="font-medium text-zinc-900 text-[15px]">
                    {companyName}
                </span>
                <p className="text-sm text-zinc-500">{role}</p>
            </div>

            <ArrowUpRight className="size-4 text-zinc-300 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-200 shrink-0" />
        </MotionLink>
    );
};
