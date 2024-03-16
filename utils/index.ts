export const staticStats = [
  {
    key: "projects",
    title: "Total Projects",
    value: "1",
  },
  {
    key: "tasks",
    title: "Total Tasks",
    value: "3",
  },
  {
    key: "mytasks",
    title: "Assigned Tasks",
    value: "2",
  },
  {
    key: "completed",
    title: "Completed Tasks",
    value: "0",
  },
];
export const testProjects = [
  {
    projectId: "projectId1",
    manager: "AskarManager",
    name: "TechnoPolis",
    description:
      "Develop a new feature for the website that allows users to reset their passwords",
    status: "pending",
    start_date: new Date(),
    end_date: new Date(),
    members: ["memberId1"],
    priority: "high",
    tasks_list: ["taskId1"],
    files: [],
    category: [],
    budget: "string",
  },
];
export const testTasks = [
  {
    taskId: "taskId1",
    project: "string",
    name: "Task 1",
    label: "Make Home Page of CRM",
    description:
      "Develop a new feature for the website that allows users to reset their passwords",
    status: "pending",
    priority: "string",
    members: ["memberId1"],
    files: [],
    change_log: [
      {
        logId: "1",
        memberId: "memberId1",
        date: new Date().toLocaleDateString(),
        description: "Fetch data has been changed",
      },
    ],
    due_date: new Date(),
  },
];
export const testMembers = [
  {
    memberId: "memberId1",
    role: "string",
    fullname: "Askar Fr Developer",
    email: "string",
    assigned_projects: [],
    assigned_tasks: ["taskId1"],
    completed_projects: [],
    completed_tasks: [],
    team: [],
    notes: "string",
    avatar:
      "https://res.cloudinary.com/dxvf93ovn/image/upload/v1706155582/samples/smile.jpg",
    phone: "+0123456789",
  },
];

export function testNotes() {
  return "lorem ipsum dolor set Amet";
}
