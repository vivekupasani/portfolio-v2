"use client";

import { motion, Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { ProjectTile } from "@/components/Project";
import { Title } from "@/components/Title";
import { WorkedAt } from "@/components/WorkedAt";
import { ClientProjectList, PersonalProjectList } from "@/lib/utils/projects";
import { Skills } from "@/lib/utils/skills";
import { WorkList } from "@/lib/utils/work";

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

/* ---- Social config ---- */
const socials = [
  { label: "twitter", href: "https://x.com/v1vekupasani" },
  { label: "github", href: "https://github.com/vivekupasani" },
  { label: "linkedin", href: "https://linkedin.com/in/vivekupasani" },
  { label: "gmail", href: "mailto:vivekupasani984@gmail.com" },
  { label: "instagram", href: "https://instagram.com/v1vekupasani" },
];

/* ------------------ Page ------------------ */

export default function Home() {
  return (
    <section className="bg-zinc-50 text-zinc-900 min-h-svh">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col font-sans py-10 px-6 md:px-0 max-w-xl mx-auto"
      >
        {/* ── Status-line Social Bar ── */}
        <motion.nav
          variants={fadeUp}
          className="flex items-center gap-1 font-mono text-[12px] text-zinc-400"
        >
          {/* {socials.map((s, i) => (
            <span key={s.label} className="flex items-center gap-1">
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors duration-150"
              >
                {s.label}
              </a>
              {i < socials.length - 1 && (
                <span className="text-zinc-300 select-none">·</span>
              )}
            </span>
          ))} */}
        </motion.nav>

        {/* ── Profile ── */}
        <motion.div variants={fadeUp} className="mt-14">
          <Image
            src="/me.jpg"
            alt="Vivek Upasani"
            width={80}
            height={80}
            className="rounded-xl ring-1 ring-zinc-200 shadow-sm"
          />

          <h1 className="text-2xl font-semibold mt-4 flex items-center gap-1.5">
            vivek upasani
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 48 48"
              className="inline-block"
            >
              <polygon
                fill="#42a5f5"
                points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
              />
              <polygon
                fill="#fff"
                points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
              />
            </svg>
          </h1>
          <p className="text-zinc-500 mt-1 text-[15px]">
            21 y/o engineer, freelancer
          </p>
        </motion.div>

        {/* ── Currently ── */}
        <motion.div variants={fadeUp} className="mt-16">
          <Title title="currently" />
          <p className="mt-4 text-zinc-600 leading-relaxed text-[15px]">
            I&apos;m currently working as a freelance full-stack developer, and
            building{" "}
            <Link
              href="https://app.cluezy.site"
              className="text-blue-600 hover:underline font-medium"
              target="_blank"
            >
              @cluezy
            </Link>
            , my own agentic AI research engine.
          </p>
        </motion.div>

        {/* ── Work ── */}
        <motion.div variants={fadeUp} className="mt-16">
          <Title title="where i've worked" />
          <div className="flex flex-col gap-1 mt-5">
            {WorkList.map((work, idx) => (
              <WorkedAt
                key={idx}
                companyName={work.companyName}
                imageSrc={work.imageSrc}
                role={work.role}
                link={work.link}
              />
            ))}
          </div>
        </motion.div>

        {/* ── Projects ── */}
        <motion.div variants={fadeUp} className="mt-16">
          <Title title="client projects" />
          <div className="flex flex-col gap-1 mt-5">
            {ClientProjectList.map((project, idx) => (
              <ProjectTile
                key={idx}
                projectName={project.projectName}
                imageSrc={project.imageSrc}
                desc={project.desc}
                link={project.link}
              />
            ))}
          </div>
        </motion.div>

        {/* ── Projects ── */}
        <motion.div variants={fadeUp} className="mt-16">
          <Title title="personal projects" />
          <div className="flex flex-col gap-1 mt-5">
            {PersonalProjectList.map((project, idx) => (
              <ProjectTile
                key={idx}
                projectName={project.projectName}
                imageSrc={project.imageSrc}
                desc={project.desc}
                link={project.link}
              />
            ))}
          </div>
        </motion.div>

        {/* ── Skills ── */}
        <motion.div variants={fadeUp} className="mt-16">
          <Title title="skills" />
          <p className="mt-4 font-mono text-[13px] text-zinc-500 leading-relaxed">
            {Skills.join(" / ")}
          </p>
        </motion.div>

        {/* ── Footer ── */}
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
        </motion.div>
      </motion.div>
    </section>
  );
}
