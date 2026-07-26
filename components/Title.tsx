import Link from "next/link";
import React from "react";

export const Title = ({ title, href }: { title: string; href?: string }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-zinc-300">
        {title}
      </span>
      {href && (
        <Link
          href={href}
          className="font-mono text-[10px] tracking-tight uppercase text-zinc-300 hover:text-zinc-700 transition-colors shrink-0"
        >
          view all
        </Link>
      )}
    </div>
  );
};
