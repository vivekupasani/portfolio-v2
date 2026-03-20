"use client";

import { motion, Variants } from "motion/react";
import Link from "next/link";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

export function Footer() {
    return (
        <motion.div
            variants={fadeUp}
            className="mt-20 pb-8 font-mono text-[12px] text-zinc-400"
        >
            see more →{" "}
            <Link
                href="https://x.com/v1vekupasani"
                className="text-blue-600 hover:underline"
            >
                twitter
            </Link>
            {" · "}
            <Link
                href="https://github.com/vivekupasani"
                className="text-blue-600 hover:underline"
            >
                github
            </Link>
            {" · "}
            <Link
                href="https://linkedin.com/in/vivekupasani"
                className="text-blue-600 hover:underline"
            >
                linkedin
            </Link>
            {" · "}
            <Link
                href="/Vivek_Upasani_Resume.pdf"
                target="_blank"
                className="text-blue-600 hover:underline"
            >
                resume
            </Link>
        </motion.div>
    );
}
