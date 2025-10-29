import { User } from "@/types/user";
import { create } from "zustand";

type Store = {
  user: User | null;
  onAuthSuccess: ({ user }: { user: User }) => void;
  clearAuth: () => void;
};

export const useAuth = create<Store>()((set) => ({
  user: null,
  onAuthSuccess: ({ user }) => set(() => ({ user: user })),
  clearAuth: () => set(() => ({ user: null })),
}));
