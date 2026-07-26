"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Github, Linkedin } from "lucide-react";

const links = [
  { href: "/", label: "home" },
  { href: "/work", label: "work" },
  { href: "/projects", label: "projects" },
];

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Nav() {
  const pathname = usePathname();

  return (
    <nav id="top" className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-0.5 md:gap-1 bg-white/50 backdrop-blur-xl border border-zinc-200/70 rounded-full px-1.5 md:px-2 py-1.5 shadow-sm">
        {links.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-2.5 md:px-3.5 py-0 pb-2 pt-1"
            >
              {isActive && (
                <motion.div
                  layoutId="active"
                  className="absolute inset-0 bg-zinc-100 rounded-2xl"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className={`relative text-[14px] md:text-[13px] transition-colors duration-200 ${
                isActive
                  ? "text-zinc-500 font-medium"
                  : "text-zinc-400 hover:text-zinc-700"
              }`}>
                {link.label}
              </span>
            </Link>
          );
        })}

        <Link
          href="/Vivek_Upasani_Resume.pdf"
          target="_blank"
          className="px-2.5 md:px-3.5 py-0 pb-2 pt-1 md:pt-1.5 text-[14px] md:text-[13px] text-zinc-400 hover:text-zinc-700 transition-colors rounded-full hover:bg-zinc-100"
        >
          resume
        </Link>

        <span className="w-px h-4 hidden md:flex bg-zinc-200 mx-0.5 md:mx-1" />

        <div className="hidden md:flex items-center gap-0.5 md:gap-1">
          <Link
            href="https://x.com/v1vekupasani"
            target="_blank"
            className="p-1 md:p-1.5 text-zinc-400 hover:text-zinc-700 transition-colors rounded-full hover:bg-zinc-100"
          >
            <XIcon className="h-3 md:h-3.5 w-3 md:w-3.5" />
            <span className="sr-only">X (Twitter)</span>
          </Link>
          <Link
            href="https://github.com/vivekupasani"
            target="_blank"
            className="p-1 md:p-1.5 text-zinc-400 hover:text-zinc-700 transition-colors rounded-full hover:bg-zinc-100"
          >
            <Github className="h-3 md:h-3.5 w-3 md:w-3.5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/vivekupasani"
            target="_blank"
            className="p-1 md:p-1.5 mr-1 text-zinc-400 hover:text-zinc-700 transition-colors rounded-full hover:bg-zinc-100"
          >
            <Linkedin className="h-3 md:h-3.5 w-3 md:w-3.5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
