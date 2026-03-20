import { Metadata } from "next";
import WorkClient from "@/components/Work-Client";

export const metadata: Metadata = {
  title: "Work",
  description: "A history of my professional journey, roles, and contributions in various companies and projects.",
};

export default function WorkPage() {
  return <WorkClient />;
}
