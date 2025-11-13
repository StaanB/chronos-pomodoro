import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number; // duration in minutes
  startDate: number;
  completeDate: number | null; // Quando o timer chega no final
  interruptedDate: number | null; // Quando o timer é interrompido
  type: keyof TaskStateModel["config"];
};
