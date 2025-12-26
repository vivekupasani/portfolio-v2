import { ProjectTile } from "@/components/Project";
import { Title } from "@/components/Title";
import { WorkedAt } from "@/components/WorkedAt";
import { ProjectList } from "@/utils/projects";
import { WorkList } from "@/utils/work";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-zinc-50 text-zinc-900">
      <div className="flex flex-col min-h-screen font-sans py-12 px-6 md:px-0 max-w-2xl mx-auto">
        <div className="flex gap-4 p-1">
          <Link href="" target="_blank" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">
            twitter
          </Link>
          //
          <Link href="" target="_blank" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">
            github
          </Link>
          //
          <Link href="" target="_blank" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">
            linkedin
          </Link>
          //
          <Link href="" target="_blank" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">
            instagram
          </Link>
        </div>

        <div className="mt-12">
          <div className="relative">
            <Image
              src="/me.jpg"
              alt="vivek upasani"
              height={64}
              width={64}
              className="rounded-full object-cover border border-zinc-200"
            />
          </div>

          <h1 className="text-2xl font-semibold mt-4 text-zinc-900">vivek upasani</h1>
          <p className="mt-1 text-zinc-600">software developer & freelancer</p>
        </div>

        <div className="mt-12">
          <Title title="currently" />
          <p className="mt-3 text-zinc-600 leading-relaxed">I'm working as a freelance full stack developer and in free time building cluezy.</p>
        </div>

        <div className="mt-12">
          <Title title="where i've worked" />
          <div className="flex flex-col gap-2 mt-4">
            {
              WorkList.map((work, idx) => (
                <WorkedAt key={idx} companyName={work.companyName} imageSrc={work.imageSrc} role={work.role} link={work.link} />
              ))
            }
          </div>
        </div>

        <div className="mt-12 w-full">
          <Title title="work" />
          <div className="flex flex-col gap-3 mt-4">
            {
              ProjectList.map((work, idx) => (
                <ProjectTile key={idx} projectName={work.projectName} imageSrc={work.imageSrc} desc={work.desc} link={work.link} />
              ))
            }
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-1 gap-y-1 text-zinc-500">
          <p>if you want to see more of my work, you can check out my</p>
          <Link href="" className="text-blue-600 hover:text-blue-700 transition-colors font-medium underline decoration-zinc-300 underline-offset-2">
            twitter
          </Link>
          or
          <Link href="" className="text-blue-600 hover:text-blue-700 transition-colors font-medium underline decoration-zinc-300 underline-offset-2">
            github
          </Link>
        </div>
      </div>
    </section>
  );
}
