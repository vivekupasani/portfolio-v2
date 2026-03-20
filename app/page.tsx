import { Metadata } from "next";
import HomeClient from "@/components/Home-Client";

export const metadata: Metadata = {
  title: "Vivek Upasani",
  description: "Portfolio of Vivek Upasani, a Full Stack Developer and Freelancer building Cluezy.",
};

export default function Home() {
  return <HomeClient />;
}
