"use client";

import { motion, Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { ProjectTile } from "@/components/Project";
import { Title } from "@/components/Title";
import { WorkedAt } from "@/components/WorkedAt";
import { ProjectList } from "@/utils/projects";
import { Skills } from "@/utils/skills";
import { WorkList } from "@/utils/work";
import { Verified } from "lucide-react";

/* ------------------ Animations ------------------ */

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const hoverLift = {
  whileHover: { y: -2, scale: 1.03 },
  transition: { type: "spring", stiffness: 300 },
};

/* ------------------ Page ------------------ */

export default function Home() {
  return (
    <section className="bg-zinc-50 text-zinc-900">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col min-h-screen font-sans py-12 px-6 md:px-0 max-w-2xl mx-auto"
      >
        {/* Social Links */}
        <motion.div variants={fadeUp} className="flex gap-4 flex-wrap">
          {[
            ["twitter", "https://x.com/v1vekupasani"],
            ["github", "https://github.com/vivekupasani"],
            ["linkedin", "https://linkedin.com/in/vivekupasani"],
            ["email", "mailto:vivekupasani984@gmail.com"],
            ["instagram", "https://instagram.com/v1vekupasani"],
          ].map(([label, link]) => (
            <motion.a
              href={link}
              target="_blank"
              className="text-blue-600 font-medium hover:underline"
              whileHover={{ y: -2, scale: 1.03 }}
              transition={{ type: "spring" as const, stiffness: 300 }}
            >
              {label}
            </motion.a>
          ))}
        </motion.div>

        {/* Profile */}
        <motion.div variants={fadeUp} className="mt-12">
          <Image
            src="/me.jpg"
            alt="Vivek Upasani"
            width={64}
            height={64}
            className="rounded-full border border-zinc-200"
          />

          <h1 className="text-2xl font-semibold mt-4">vivek upasani
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="inline-block ml-1 mb-1">
              <polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"></polygon><polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"></polygon>
            </svg>
          </h1>
          <p className="text-zinc-600 mt-1">software developer & freelancer</p>
        </motion.div>

        {/* Currently */}
        <motion.div variants={fadeUp} className="mt-12">
          <Title title="currently" />
          <p className="mt-3 text-zinc-600 leading-relaxed">
            I’m currently working as a freelance full-stack developer, and
            building{" "}
            <Link
              href="https://cluezy.site"
              className="text-blue-600 hover:underline font-medium"
              target="_blank"
            >
              @cluezy
            </Link>
            , my own agentic AI research engine.
          </p>
        </motion.div>

        {/* Work */}
        <motion.div variants={fadeUp} className="mt-12">
          <Title title="where i've worked" />
          <div className="flex flex-col gap-3 mt-4">
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

        {/* Projects */}
        <motion.div variants={fadeUp} className="mt-12">
          <Title title="work" />
          <div className="flex flex-col gap-3 mt-4">
            {ProjectList.map((project, idx) => (
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

        {/* Skills */}
        <motion.div variants={fadeUp} className="mt-12">
          <Title title="skills" />
          <div className="flex flex-wrap gap-3 mt-4">
            {Skills.map((skill, idx) => (
              <span key={idx} className="text-sm text-zinc-700">
                {skill}
                {idx !== Skills.length - 1 && " •"}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={fadeUp}
          className="mt-16 text-zinc-500 text-sm"
        >
          if you want to see more of my work, check my{" "}
          <Link
            href="https://x.com/v1vekupasani"
            className="text-blue-600 underline"
          >
            twitter
          </Link>{" "}
          or{" "}
          <Link
            href="https://github.com/vivekupasani"
            className="text-blue-600 underline"
          >
            github
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
