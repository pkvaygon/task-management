import DashNotes from "@/components/Home/DashNotes";
import DashProjects from "@/components/Home/DashProjects";
import DashTasks from "@/components/Home/DashTasks";
import DashTeam from "@/components/Home/DashTeam";
import Stats from "@/components/Home/Stats";

export default function Home() {
  return (
    <section className="flex flex-col gap-2">
      <article>
        <Stats />
      </article>
      <div className="grid grid-cols-2 h-[calc(100vh-130px)] overflow-hidden gap-2 grid-rows-2 rounded-large transition ease-in-out">
        <DashTasks />
        <DashProjects />
        <DashTeam/>
        <DashNotes />
      </div>
    </section>
  );
}
