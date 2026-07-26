"use client";

import { motion, Variants } from "motion/react";
import Image from "next/image";

import { ProjectTile } from "@/components/Project";
import { Title } from "@/components/Title";
import { WorkedAt } from "@/components/Work";
import { ClientProjectList } from "@/lib/utils/projects";
import { Skills } from "@/lib/utils/skills";
import { WorkList } from "@/lib/utils/work";

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0,
        },
    },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, filter: "blur(6px)" },
    show: {
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function HomeClient() {
    return (
        <section className="bg-white text-zinc-900 min-h-svh">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col font-sans pt-16 px-6 md:px-0 max-w-xl mx-auto"
            >
                <motion.div variants={fadeUp} className="rounded-xl bg-zinc-50/50 border border-zinc-100 p-5">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                        <div className="group relative shrink-0">
                            <div className="absolute -inset-1 rounded-2xl bg-zinc-200/50 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300" />
                            <Image
                                src="/me.png"
                                alt="Vivek Upasani"
                                width={64}
                                height={64}
                                className="relative rounded-xl h-16 w-16 ring-1 ring-zinc-200 object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                            />
                        </div>

                        <div>
                            <h1 className="text-xl font-medium text-zinc-500">
                                vivek upasani
                            </h1>
                            <p className="text-zinc-400 text-sm mt-0.5">
                                software engineer <span className="font-bold">&middot;</span> open to work
                            </p>
                        </div>
                    </div>

                    <div className="h-px bg-zinc-200/50 my-4" />

                    <div className="flex flex-col gap-1">
                        <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-zinc-300">currently</span>
                        <p className="text-[14px] text-zinc-500 leading-relaxed">
                            I'm currently working as a freelance web developer. I design and build products from start to finish, craft clean interfaces, thoughtful typography, and software that feels refined.
                        </p>
                    </div>
                </motion.div>

                <motion.div variants={fadeUp} className="mt-8">
                    <div className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-4">
                        <Title title="where i've worked" href="/work" />
                        <div className="flex flex-col gap-0.5 mt-3">
                            {WorkList.slice(0, 4).map((work, idx) => (
                                <WorkedAt key={idx} work={work} />
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={fadeUp} className="mt-6">
                    <div className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-4">
                        <Title title="selected projects" href="/projects" />
                        <div className="flex flex-col gap-0.5 mt-3">
                            {ClientProjectList.slice(0, 3).map((project, idx) => (
                                <ProjectTile key={idx} project={project} />
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={fadeUp} className="mt-6">
                    <div className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-4">
                        <Title title="tech stack" />
                        <div className="flex flex-wrap gap-1.5 mt-3">
                            {Skills.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="text-[13px] text-zinc-500 px-2.5 py-1 rounded-md bg-white border border-zinc-100 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-800 hover:border-zinc-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
}
