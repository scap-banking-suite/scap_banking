import { AuthUser } from "@/components/api/type";
import { createStore } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  accessToken: string | null;
  currentUser: AuthUser | null;
  setAccessToken: (token: string | null) => void;
  setCurrentUser: (user: AuthUser | null) => void;
  logout: () => void;
}

const authStore = createStore<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      currentUser: null,
      setAccessToken: (token) => set({ accessToken: token }),
      setCurrentUser: (user) => set({ currentUser: user }),
      logout: () => set({ accessToken: null, currentUser: null }),
    }),
    {
      name: "auth",
      getStorage: () => localStorage,
    }
  )
);

export const useAuthStore = authStore.getState;
