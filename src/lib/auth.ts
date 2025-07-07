import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UserRole = "user" | "admin";

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: string;
  role: UserRole;
  createdAt: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  register: (userData: Omit<User, "id" | "role" | "createdAt"> & { password: string }) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      login: async (email, password) => {
        console.log("Login dipanggil dengan:", email, password); //
        try {
          const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });

          const data = await res.json();

          if (!res.ok) return { success: false, message: data.message };

          set({
            user: data.user,
            token: data.token,
            isAuthenticated: true,
          });

          localStorage.setItem("mabrurx-auth-storage", JSON.stringify({ user: data.user, token: data.token }));

          return { success: true };
        } catch (err) {
          return { success: false, message: "Login failed. Please try again." };
        }
      },

      register: async (userData) => {
        try {
          console.log("userData yang dikirim:", userData);

          const res = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
          });

          const data = await res.json();

          if (!res.ok) return { success: false, message: data.message };

          set({
            user: data.user,
            token: data.token,
            isAuthenticated: true,
          });

          localStorage.setItem("mabrurx-auth-storage", JSON.stringify({ user: data.user, token: data.token }));

          return { success: true };
        } catch (err) {
          return { success: false, message: "Registration failed. Please try again." };
        }
      },

      logout: () => {
        set({ user: null, token: null, isAuthenticated: false });
        localStorage.removeItem("mabrurx-auth-storage");
      },

      updateUser: (userData) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...userData } : null,
        }));
      },
    }),
    {
      name: "mabrurx-auth-storage",
      getStorage: () => localStorage,
    }
  )
);

