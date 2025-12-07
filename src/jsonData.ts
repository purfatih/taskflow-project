import type { TaskType } from "./types";

export const initialTasks = [
  {
    id: 1,
    title: "React Router Kurulumu",
    status: "todo",
    tags: ["Frontend", "Acil"],
    taskId: "TSK-01",
  },
  {
    id: 2,
    title: "API Bağlantısı",
    status: "in-progress",
    tags: ["Backend"],
    taskId: "TSK-02",
  },
  {
    id: 3,
    title: "Tasarım Revizesi",
    status: "todo",
    tags: ["Design"],
    taskId: "TSK-03",
  },
  {
    id: 4,
    title: "Login Ekranı",
    status: "in-progress",
    tags: ["Auth", "User Management"],
    taskId: "TSK-04",
  },
  {
    id: 5,
    title: "Register Ekranı",
    status: "todo",
    tags: ["Auth", "User Management"],
    taskId: "TSK-05",
  },
  {
    id: 6,
    title: "Checkout Sayfası",
    status: "done",
    tags: ["Auth", "Payment"],
    taskId: "TSK-06",
  },
];
export const inProgressTasks: TaskType[] = initialTasks.filter(
  (task) => task.status === "in-progress"
) as TaskType[];
export const doneTasks: TaskType[] = initialTasks.filter(
  (task) => task.status === "done"
) as TaskType[];
export const todoTasks: TaskType[] = initialTasks.filter(
  (task) => task.status === "todo"
) as TaskType[];
