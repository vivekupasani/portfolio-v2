import React from "react";

export const Title = ({ title }: { title: string }) => {
    return (
        <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-zinc-400 shrink-0">
                {title}
            </span>
            <div className="h-px flex-1 bg-zinc-200" />
        </div>
    );
};
