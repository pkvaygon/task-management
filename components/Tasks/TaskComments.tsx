import { testMembers, testTasks } from "@/utils";
import Image from "next/image";

export default function TaskComments({ taskId }: { taskId: string }) {
  const task = testTasks.find((task) => task.taskId === taskId);
  const member = testMembers.find((member) =>
    member.assigned_tasks.includes(taskId)
  );
  return (
    <div className="w-1/2 bg-green-200 dark:bg-darkbg h-[calc(100vh-70px)] p-2 shadow-3xlin rounded-md">
      <div className="select-none border-white border-bottom border-dashed border-b-2 pb-2">
        <h1 className="text-2xl">Comments</h1>
      </div>
      <div className="flex flex-col gap-2 mt-1">
        <div className="flex justify-between items-start bg-green-300 p-2 rounded-lg">
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
            <p className="font-serif">{task?.change_log[0].description}</p>
            <span>{task?.change_log[0].date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
