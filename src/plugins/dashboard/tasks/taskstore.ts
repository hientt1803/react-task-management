import { TASK_STATUS } from "@/types/task-enum";
import { atom } from "recoil";

export interface ITask {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  description: string;
  status: TASK_STATUS;
}

export const listTaskState = atom<ITask[]>({
  key: "listTaskState",
  default: [],
});

export const taskActiveState = atom<ITask | null>({
  key: "taskActiveState",
  default: null,
});

export const modalDeleteState = atom<boolean>({
  key: "modalDeleteState",
  default: false,
});
