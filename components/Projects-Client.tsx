"use client";

import { motion, Variants } from "motion/react";
import { AllProjects } from "@/lib/utils/projects";
import { ProjectTile } from "@/components/Project";
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

export default function ProjectsClient() {
    return (
        <section className="bg-white text-zinc-900 min-h-svh">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col font-sans pt-16 px-6 md:px-0 max-w-xl mx-auto"
            >
                <motion.div variants={fadeUp} className="rounded-xl bg-zinc-50/50 border border-zinc-100 p-5">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-xl font-medium text-zinc-500">
                            projects
                        </h1>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            client work and personal projects.
                        </p>
                    </div>
                </motion.div>

                <motion.div variants={fadeUp} className="mt-6">
                    <div className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-4">
                        <Title title="all projects" />
                        <div className="flex flex-col gap-0.5 mt-3">
                            {AllProjects.map((project) => (
                                <ProjectTile key={project.slug} project={project} showTechStack={true} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
