import React from 'react'

export const Title = ({ title }: { title: string }) => {
    return (
        <p className="text-zinc-500 font-semibold text-xs tracking-wider uppercase">{title}</p>
    )
}
