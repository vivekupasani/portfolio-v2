"use client";

import { motion, Variants } from "motion/react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { ArrowLeft, MapPin } from "lucide-react";

import { WorkList } from "@/lib/utils/work";
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
    hidden: { opacity: 0, filter: "blur(6px)" },
    show: {
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export function WorkDetails() {
    const { slug } = useParams();

    const work = WorkList.find((w) => w.slug === slug);

    if (!work) {
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
                        href="/work"
                        className="inline-flex items-center gap-1 text-zinc-500 hover:text-zinc-700 transition-colors text-sm"
                    >
                        <ArrowLeft size={13} />
                        work
                    </Link>
                </motion.div>

                <motion.div variants={fadeUp} className="mt-6 rounded-xl bg-zinc-50/50 border border-zinc-100 p-5">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-xl font-medium text-zinc-500">
                            {work.companyName}
                        </h1>
                        <p className="text-zinc-500 text-sm">
                            {work.role}
                        </p>
                        <div className="flex items-center gap-1.5 text-zinc-500 mt-0.5 text-sm">
                            <MapPin size={12} />
                            {work.location}
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={fadeUp} className="mt-6">
                    <div className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-4">
                        <Title title="technologies" />
                        <div className="flex flex-wrap gap-1.5 mt-3">
                            {work.techStack.map((tech) => (
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
                            {work.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-zinc-500 leading-relaxed">
                                    <span className="mt-1 font-mono text-[10px] text-zinc-500 tabular-nums shrink-0 w-4 text-right">
                                        {(idx + 1).toString().padStart(2, "0")}
                                    </span>
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
