import { WorkDetails } from "@/components/Work-Details";
import { WorkList } from "@/lib/utils/work";
import { Metadata } from "next";

export function generateStaticParams() {
  return WorkList.map((work) => ({
    slug: work.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const work = WorkList.find((w) => w.slug === slug);
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

export default async function WorkDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <WorkDetails />
}
