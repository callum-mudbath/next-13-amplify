import { create } from "zustand";
type UserState = {
  user: { name: string } | null;
  setUser: (user: { name: string }) => void;
};
export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set((state) => ({ ...state, user })),
}));
