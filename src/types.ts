export interface TaskType {
  id: number;
  title: string;
  status?: string;
  tags: string[];
  taskId: string;
  tasks: TaskType;
}
