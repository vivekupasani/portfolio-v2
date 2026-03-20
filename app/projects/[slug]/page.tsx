import { ProjectDetails } from "@/components/Project-Details";
import { AllProjects } from "@/lib/utils/projects";
import { Metadata } from "next";

export function generateStaticParams() {
  return AllProjects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = AllProjects.find((p) => p.slug === params.slug);
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

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  return <ProjectDetails />;
}
