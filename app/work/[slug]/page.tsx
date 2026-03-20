import { WorkDetails } from "@/components/Work-Details";
import { WorkList } from "@/lib/utils/work";
import { Metadata } from "next";

export function generateStaticParams() {
  return WorkList.map((work) => ({
    slug: work.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const work = WorkList.find((w) => w.slug === params.slug);
  if (!work) return { title: "Work Not Found" };

  return {
    title: `${work.role} at ${work.companyName}`,
    description: work.details.slice(0, 2).join(" "),
    openGraph: {
      title: `${work.role} at ${work.companyName}`,
      description: work.details.slice(0, 2).join(" "),
      type: "article",
    },
  };
}

export default function WorkDetail({ params }: { params: { slug: string } }) {
  return <WorkDetails />
}
