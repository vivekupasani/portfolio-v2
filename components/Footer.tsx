"use client";

import { motion, Variants } from "motion/react";
import Link from "next/link";
import { Github, Linkedin, FileText } from "lucide-react";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export function Footer() {
    return (
        <motion.div
            variants={fadeUp}
            className="mt-16 pb-12 flex flex-col items-center gap-6"
        >
            <div className="w-full h-px bg-zinc-100" />

            <div className="flex gap-5 text-zinc-400">
                <Link href="https://x.com/v1vekupasani" target="_blank" className="hover:text-zinc-800 transition-colors duration-200">
                    <XIcon className="h-4 w-4" />
                    <span className="sr-only">X (Twitter)</span>
                </Link>
                <Link href="https://github.com/vivekupasani" target="_blank" className="hover:text-zinc-800 transition-colors duration-200">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                </Link>
                <Link href="https://linkedin.com/in/vivekupasani" target="_blank" className="hover:text-zinc-800 transition-colors duration-200">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="/Vivek_Upasani_Resume.pdf" target="_blank" className="hover:text-zinc-800 transition-colors duration-200">
                    <FileText className="h-4 w-4" />
                    <span className="sr-only">Resume</span>
                </Link>
            </div>

            <p className="text-[12px] text-zinc-300">
                &copy; {new Date().getFullYear()} Vivek Upasani
            </p>
        </motion.div>
    );
}
