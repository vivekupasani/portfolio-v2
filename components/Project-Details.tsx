"use client";

import { motion, Variants } from "motion/react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { ClientProjectList, PersonalProjectList } from "@/lib/utils/projects";
import { Title } from "@/components/Title";

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
    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
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
        <section className="bg-white text-zinc-900 min-h-svh">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col font-sans pt-16 px-6 md:px-0 max-w-xl mx-auto"
            >
                <motion.div variants={fadeUp}>
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-1 text-zinc-500 hover:text-zinc-700 transition-colors text-sm"
                    >
                        <ArrowLeft size={13} />
                        projects
                    </Link>
                </motion.div>

                <motion.div variants={fadeUp} className="mt-6 rounded-xl bg-zinc-50/50 border border-zinc-100 p-5">
                    <h1 className="text-xl font-medium text-zinc-500">
                        {project.projectName}
                    </h1>
                    <p className="text-zinc-500 mt-1 text-sm">
                        {project.desc}
                    </p>
                    <div className="flex gap-8 mt-4 pt-4 border-t border-zinc-200/50">
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.15em]">timeline</span>
                            <span className="text-sm text-zinc-500">{project.timeline}</span>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.15em]">type</span>
                            <span className="text-sm text-zinc-500 capitalize">{project.category}</span>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.15em]">link</span>
                            <Link
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors underline underline-offset-2 decoration-zinc-200 hover:decoration-zinc-400"
                            >
                                {project.link.includes("github.com") ? "github" : "live"}
                            </Link>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={fadeUp} className="mt-6">
                    <div className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-4">
                        <Title title="tech stack" />
                        <div className="flex flex-wrap gap-1.5 mt-3">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2.5 py-1 bg-white border border-zinc-100 text-zinc-500 rounded-md text-[11px] transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-700"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={fadeUp} className="mt-6">
                    <div className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-4">
                        <Title title="what i did" />
                        <ul className="mt-3 space-y-3">
                            {project.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-zinc-500 leading-relaxed">
                                    <span className="mt-2 size-1 shrink-0 rounded-full bg-zinc-300" />
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
