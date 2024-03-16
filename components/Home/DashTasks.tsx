import { ShowIcon } from "@/icons";
import { testTasks } from "@/utils";
export default function DashTasks() {
  return (
      <section className="hover:row-span-3 bg-green-200 w-full p-3 overflow-y-auto h-full rounded-large dark:bg-darkbg flex flex-col gap-2  transition-all ease-in-out">
          <div className="  select-none border-bottom border-dashed border-b-2 pb-2">
              <h2>Assigned Tasks</h2>
          </div>
        {testTasks.map((task) => (
          <div
            className=" flex justify-between bg-zinc-50 items-center rounded-large p-2 dark:bg-zinc-500"
            key={task.taskId}>
            <div>
              <h2 className="text-sm">{task.name}</h2>
              <div>
                <span className="text-xs">{task.label}</span>
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
