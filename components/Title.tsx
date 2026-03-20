import Link from "next/link";
import React from "react";

export const Title = ({ title, href }: { title: string; href?: string }) => {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-zinc-400 shrink-0">
        {title}
      </span>
      <div className="h-px flex-1 bg-zinc-200" />
      {href && (
        <Link
          href={href}
          className="font-mono text-[10px] tracking-tighter uppercase text-zinc-300 hover:text-zinc-500 transition-colors shrink-0"
        >
          [view all]
        </Link>
      )}
    </div>
  );
};
