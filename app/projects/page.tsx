import { Metadata } from "next";
import ProjectsClient from "@/components/Projects-Client";

export const metadata: Metadata = {
  title: "Projects",
  description: "A complete list of my work, from client products to personal side projects and experiments.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}