import { testMembers, testTasks } from "@/utils";
import Image from "next/image";

interface TaskDetailProps {
  params: {
    taskId: string;
  };
}

export default function TaskDetail({ params }: TaskDetailProps) {
  const { taskId } = params;
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
    <section className="w-full flex justify-between items-start gap-2">
      <div className="w-1/2 bg-zinc-200 h-[calc(100vh-70px)] p-2 shadow-3xlin rounded-md">
        <div className="select-none border-white border-bottom border-dashed border-b-2 pb-2">
          <h1 className="text-2xl">Overview {task?.name}</h1>
        </div>
        <div className="flex flex-col gap-3">
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
                {task?.files && task?.files.length < 0
                  ? "No files"
                  : "No Files"}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-zinc-200 h-[calc(100vh-70px)] p-2 shadow-3xlin rounded-md">
        <div className="select-none border-white border-bottom border-dashed border-b-2 pb-2">
          <h1 className="text-2xl">Comments</h1>
        </div>
        <div>
          <div className="flex justify-between items-start">
            <div className="flex justify-start items-center gap-2">
              <div className="w-[40px] h-[40px] relative">
                <Image
                  className="object-cover rounded-full"
                  fill
                  src={member?.avatar || ""}
                  alt="asdasd"
                />
              </div>
              <h4>{member?.fullname}</h4>
            </div>
            <div className="w-3/5  text-end">
              <p>{task?.change_log[0].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
