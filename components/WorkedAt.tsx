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
            className="flex items-center gap-4 py-2 -mx-2 px-2 rounded-lg hover:bg-zinc-100/50 transition-colors group"
            whileHover={{ y: -2 }}
            transition={{ type: "spring" as const, stiffness: 300 }}
        >
            <div className="relative shrink-0">
                <Image
                    src={imageSrc}
                    alt={companyName}
                    height={35}
                    width={35}
                    className="h-[35px] w-[35px] rounded-full border border-zinc-200"
                />
            </div>

            <div className="flex flex-col grow">
                <div className="flex items-center gap-2">
                    <span className="font-medium text-zinc-900 group-hover:text-blue-600 transition-colors">
                        {companyName}
                    </span>

                    <ArrowUpRight className="size-4 text-zinc-400 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all" />
                </div>

                <p className="text-sm text-zinc-500">{role}</p>
            </div>
        </MotionLink>
    );
};
