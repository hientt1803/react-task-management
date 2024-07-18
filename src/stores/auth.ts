import { atom } from "recoil";

interface IAuthStore {
  id: number;
  fullName: string;
  email: string;
}

export const authStore = atom<IAuthStore | null>({
  key: "authStore",
  default: null,
});
