"use client";

import { motion, Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, MapPin } from "lucide-react";

import { WorkList } from "@/lib/utils/work";
import { Title } from "@/components/Title";
import { Footer } from "@/components/Footer";

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.1,
        },
    },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

export function WorkDetails() {
    const { slug } = useParams();

    const work = WorkList.find((w) => w.slug === slug);

    if (!work) {
        notFound();
    }

    return (
        <section className="bg-zinc-50 text-zinc-900 min-h-svh">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col font-sans py-10 px-6 md:px-0 max-w-xl mx-auto"
            >
                {/* Back Link */}
                <div>
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-2 font-mono text-zinc-400 hover:text-zinc-900 transition-colors text-[13px] mb-8 group"
                    >
                        ← go back
                    </Link>
                </div>

                {/* Header */}
                <motion.div variants={fadeUp} className="flex items-start justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-semibold tracking-tight">
                            {work.companyName}
                        </h1>
                        <p className="text-zinc-600 mt-2 text-[17px] font-medium">
                            {work.role}
                        </p>
                        <div className="flex items-center gap-2 text-zinc-500 mt-2 text-sm">
                            <MapPin size={14} />
                            {work.location}
                        </div>
                    </div>
                    {/* <div className="relative shrink-0">
                        <Image
                            src={work.imageSrc}
                            alt={work.companyName}
                            width={64}
                            height={64}
                            className="rounded-xl size-16 ring-1 ring-zinc-200 shadow-sm object-cover"
                        />
                    </div> */}
                </motion.div>

                {/* Tech Stack */}
                <motion.div variants={fadeUp} className="mt-8">
                    <Title title="technologies" />
                    <div className="flex flex-wrap gap-2 mt-4">
                        {work.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 bg-zinc-100 border border-zinc-200 text-zinc-600 rounded-full text-[12px] font-medium"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Details */}
                <motion.div variants={fadeUp} className="mt-12">
                    <Title title="what i did" />
                    <ul className="mt-4 space-y-3">
                        {work.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-4 text-zinc-600 text-[15px] leading-relaxed">
                                <div className="mt-1.5 text-blue-500 font-mono text-[11px] tabular-nums shrink-0">
                                    {(idx + 1).toString().padStart(2, "0")}
                                </div>
                                {detail}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Website Link */}
                {/* <motion.div variants={fadeUp} className="mt-16">
                    <Link
                        href={work.link}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors text-sm font-medium"
                    >
                        Visit Website
                        <ExternalLink size={14} />
                    </Link>
                </motion.div> */}

                <Footer />
            </motion.div>
        </section>
    );
}