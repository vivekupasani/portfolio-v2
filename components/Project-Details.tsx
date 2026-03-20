"use client";

import { motion, Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Globe, Smartphone, Briefcase, User } from "lucide-react";

import { ClientProjectList, PersonalProjectList } from "@/lib/utils/projects";
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

export function ProjectDetails() {
    const { slug } = useParams();

    const allProjects = [...ClientProjectList, ...PersonalProjectList];
    const project = allProjects.find((p) => p.slug === slug);

    if (!project) {
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
                        href="/projects"
                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition-colors text-[13px] mb-8 group font-mono"
                    >
                        ← go back
                    </Link>
                </div>

                {/* Header */}
                <motion.div variants={fadeUp} className="flex items-start justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-semibold tracking-tight">
                            {project.projectName}
                        </h1>
                        <p className="text-zinc-500 mt-2 text-[16px]">
                            {project.desc}
                        </p>
                    </div>
                    <div className="relative shrink-0">
                        <Image
                            src={project.imageSrc}
                            alt={project.projectName}
                            width={64}
                            height={64}
                            className="rounded-xl size-16 ring-1 ring-zinc-200 shadow-sm object-cover"
                        />
                    </div>
                </motion.div>

                {/* Meta info */}
                <motion.div variants={fadeUp} className="flex gap-8 mt-2 border-t border-zinc-100 py-6">
                    <div className="flex flex-col gap-1">
                        <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Timeline</span>
                        <span className="text-sm font-medium text-zinc-700">{project.timeline}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Type</span>
                        <span className="text-sm font-medium text-zinc-700 capitalize">{project.category}</span>
                    </div>
                </motion.div>

                {/* Tech Stack */}
                <motion.div variants={fadeUp} className="mt-2">
                    <Title title="tech stack" />
                    <div className="flex flex-wrap gap-2 mt-4">
                        {project.techStack.map((tech) => (
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
                        {project.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-zinc-600 text-[15px] leading-relaxed">
                                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-blue-500" />
                                {detail}
                            </li>
                        ))}
                    </ul>
                </motion.div>
                <Footer />
            </motion.div>
        </section>
    );
}