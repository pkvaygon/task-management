import TaskComments from "@/components/Tasks/TaskComments";
import TaskOverview from "@/components/Tasks/TaskOverview";

interface TaskDetailProps {
  params: {
    taskId: string;
  };
}

export default function TaskDetail({ params }: TaskDetailProps) {
  const { taskId } = params;
  return (
    <section className="w-full flex justify-between items-start gap-2">
     <TaskOverview taskId={taskId}/>
      <TaskComments taskId={taskId} />
    </section>
  );
}
