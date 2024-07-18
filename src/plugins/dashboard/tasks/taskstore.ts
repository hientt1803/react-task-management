import { TASK_STATUS } from "@/types/task-enum";
import { atom } from "recoil";

interface ITaskStore {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: string;
  status: TASK_STATUS;
}

export const listTaskState = atom<ITaskStore[]>({
  key: "listTaskState",
  default: [],
});

export const taskActiveState = atom<ITaskStore | null>({
  key: "taskActiveState",
  default: null,
});
