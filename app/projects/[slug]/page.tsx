import { ProjectDetails } from "@/components/Project-Details";
import { AllProjects } from "@/lib/utils/projects";
import { Metadata } from "next";

export function generateStaticParams() {
  return AllProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = AllProjects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.projectName,
    description: project.desc,
    openGraph: {
      title: project.projectName,
      description: project.desc,
      type: "article",
    },
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectDetails />;
}
