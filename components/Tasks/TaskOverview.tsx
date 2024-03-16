import { testMembers, testTasks } from "@/utils";
import Image from "next/image";

export default function TaskOverview({ taskId }: { taskId: string }) {
  const task = testTasks.find((task) => task.taskId === taskId);
  const member = testMembers.find((member) =>
    member.assigned_tasks.includes(taskId)
  );
  const formattedDate = task?.due_date
    ? new Date(task.due_date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";
  return (
    <div className="w-1/2 bg-green-200 dark:bg-darkbg h-[calc(100vh-70px)] shadow-3xlin rounded-md">
      <div className=" p-2 select-none border-white border-bottom border-dashed border-b-2 pb-2">
        <h1 className="text-2xl">Overview {task?.name}</h1>
      </div>
      <div className="p-2 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h3>Assignee</h3>
          <div className="flex justify-start items-center">
            <div className="w-[50px] h-[50px] relative">
              <Image
                priority
                quality={100}
                className="rounded-full object-cover"
                fill
                src={member?.avatar || ""}
                alt="asasd"
              />
            </div>
            <h3>{member?.fullname}</h3>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3>Due Date</h3>
          <div className="flex justify-start items-center">
            <h3>{formattedDate}</h3>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3>Status</h3>
          <div className="flex justify-start items-center">
            <h3>{task?.status}</h3>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3>Description</h3>
          <div className="flex justify-start items-center w-3/5">
            <h3>{task?.description}</h3>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3>Files</h3>
          <div className="flex justify-start items-center ">
            <h3>
              {task?.files && task?.files.length < 0 ? "No files" : "No Files"}
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-green-300 rounded-e-md p-2">
        <h3 className="text-2xl select-none border-white border-bottom border-dashed border-b-2 pb-2">Sub-Tasks</h3>
        <div className="mt-4">
          {task && task.subtasks && task.subtasks.length > 0 && (
            <div>
              {task.subtasks.map((subtask, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center gap-2">
                    <p className="font-sans">{subtask.name}</p>
                    <p className="bg-warning-400 animate-pulse text-xs p-1 text-black rounded-lg">{subtask.status}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
