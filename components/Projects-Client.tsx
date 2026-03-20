"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import Link from "next/link";
import { Search } from "lucide-react";
import { AllProjects } from "@/lib/utils/projects";
import { ProjectKind, ProjectType } from "@/lib/types";
import { ProjectTile } from "@/components/Project";
import { Title } from "@/components/Title";
import { Footer } from "@/components/Footer";

/* ------------------ Animations ------------------ */

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

export default function ProjectsClient() {
    const [searchQuery, setSearchQuery] = useState("");
    const [kindFilter, setKindFilter] = useState<"all" | ProjectKind>("all");
    const [typeFilter, setTypeFilter] = useState<"all" | ProjectType>("all");

    const filteredProjects = useMemo(() => {
        return AllProjects.filter((project) => {
            const matchesSearch =
                project.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.techStack.some((t) =>
                    t.toLowerCase().includes(searchQuery.toLowerCase())
                );

            const matchesKind = kindFilter === "all" || project.kind === kindFilter;
            const matchesType = typeFilter === "all" || project.type === typeFilter;

            return matchesSearch && matchesKind && matchesType;
        });
    }, [searchQuery, kindFilter, typeFilter]);

    return (
        <section className="bg-zinc-50 text-zinc-900 min-h-svh">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col font-sans py-10 px-6 md:px-0 max-w-xl mx-auto"
            >
                {/* ── Back Link ── */}
                <motion.div variants={fadeUp}>
                    <Link
                        href="/"
                        className="text-zinc-400 hover:text-zinc-600 text-[13px] font-mono transition-colors"
                    >
                        ← go back
                    </Link>
                </motion.div>

                {/* ── Header ── */}
                <motion.div variants={fadeUp} className="mt-8">
                    <h1 className="text-3xl font-semibold tracking-tight">
                        projects
                    </h1>
                    <p className="text-zinc-500 mt-2 text-[15px] leading-relaxed">
                        A complete list of my work, from client products to personal side projects and experiments.
                    </p>
                </motion.div>

                {/* ── Controls ── */}
                <motion.div variants={fadeUp} className="mt-6 flex flex-col gap-4">
                    {/* Search */}
                    <div className="relative group">
                        <Search
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-zinc-400 transition-colors"
                            size={14}
                        />
                        <input
                            type="text"
                            placeholder="Search by name, tech, or description..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 bg-white border border-zinc-200 rounded-lg text-[13px] focus:outline-none focus:ring-1 focus:ring-zinc-300 transition-all placeholder:text-zinc-300"
                        />
                    </div>

                    {/* Minimalist Filters */}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 ml-1 text-[12px] font-mono text-zinc-400">
                        <div className="flex items-center gap-3">
                            <span className="text-zinc-300 uppercase tracking-widest text-[10px]">Kind:</span>
                            {(["all", ProjectKind.client, ProjectKind.personal] as const).map((k) => (
                                <button
                                    key={k}
                                    onClick={() => setKindFilter(k)}
                                    className={`hover:text-zinc-900 transition-colors ${kindFilter === k ? "text-zinc-900 font-bold underline underline-offset-4 decoration-blue-500/50" : ""
                                        }`}
                                >
                                    {k}
                                </button>
                            ))}
                        </div>

                        <div className="w-px h-3 bg-zinc-200" />

                        <div className="flex items-center gap-3">
                            <span className="text-zinc-300 uppercase tracking-widest text-[10px]">Type:</span>
                            {(["all", ProjectType.website, ProjectType.mobile] as const).map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setTypeFilter(t)}
                                    className={`hover:text-zinc-900 transition-colors ${typeFilter === t ? "text-zinc-900 font-bold underline underline-offset-4 decoration-blue-500/50" : ""
                                        }`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* ── Projects List ── */}
                <motion.div variants={fadeUp} className="mt-8">
                    <Title title={`${filteredProjects.length} results`} />
                    <div className="flex flex-col gap-1 mt-2">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    layout
                                    key={project.slug}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ProjectTile project={project} showTechStack={true} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <div className="py-20 text-center">
                            <p className="text-zinc-400 text-sm">No projects found matching your filters.</p>
                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    setKindFilter("all");
                                    setTypeFilter("all");
                                }}
                                className="mt-4 text-blue-600 font-medium text-sm hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </motion.div>

                <Footer />
            </motion.div>
        </section>
    );
}
