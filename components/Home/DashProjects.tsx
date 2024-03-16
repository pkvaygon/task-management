import { ShowIcon } from "@/icons";
import { testProjects } from "@/utils";
export default function DashProjects() {
  return (
    <section className="hover:row-span-3 w-full p-3 overflow-y-auto h-full bg-blue-200 rounded-large dark:bg-darkbg flex flex-col gap-2  transition-all ease-in-out">
      <div className="  select-none border-bottom border-dashed border-b-2 pb-2">
        <h2>Projects</h2>
      </div>
      {testProjects.map((project) => (
        <div
          className=" flex justify-between bg-zinc-50 items-center rounded-large p-2 dark:bg-zinc-500"
          key={project.projectId}>
          <div>
            <h2 className="text-sm">{project.name}</h2>
            <div>
              <span className="text-xs">{project.tasks_list.length} task due soon</span>
            </div>
          </div>
          <div className="hover:scale-125">
            <ShowIcon width={24} />
          </div>
        </div>
      ))}
    </section>
  );
}
