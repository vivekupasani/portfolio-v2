"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import Link from "next/link";
import { Search } from "lucide-react";
import { WorkList } from "@/lib/utils/work";
import { WorkedAt } from "@/components/Work";
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

/* ------------------ Page ------------------ */

export default function WorkPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredWork = useMemo(() => {
        return WorkList.filter((work) => {
            const matchesSearch =
                work.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                work.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                work.techStack.some((t) =>
                    t.toLowerCase().includes(searchQuery.toLowerCase())
                );

            return matchesSearch;
        });
    }, [searchQuery]);

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
                        work
                    </h1>
                    <p className="text-zinc-500 mt-2 text-[15px] leading-relaxed">
                        A history of my professional journey, roles, and contributions in various companies and projects.
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
                            placeholder="Search by company, role, or tech..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 bg-white border border-zinc-200 rounded-lg text-[13px] focus:outline-none focus:ring-1 focus:ring-zinc-300 transition-all placeholder:text-zinc-300"
                        />
                    </div>
                </motion.div>

                {/* ── Work List ── */}
                <motion.div variants={fadeUp} className="mt-8">
                    <Title title={`${filteredWork.length} results`} />
                    <div className="flex flex-col gap-1 mt-2">
                        <AnimatePresence mode="popLayout">
                            {filteredWork.map((work) => (
                                <motion.div
                                    layout
                                    key={work.slug}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <WorkedAt work={work} showTechStack={true} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Empty State */}
                    {filteredWork.length === 0 && (
                        <div className="py-20 text-center">
                            <p className="text-zinc-400 text-sm">No work results found matching your search.</p>
                            <button
                                onClick={() => setSearchQuery("")}
                                className="mt-4 text-blue-600 font-medium text-sm hover:underline"
                            >
                                Clear search
                            </button>
                        </div>
                    )}
                </motion.div>

                <Footer />
            </motion.div>
        </section>
    );
}
