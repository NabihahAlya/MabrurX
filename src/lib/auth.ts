import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Types
export type UserRole = 'user' | 'admin';

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
  register: (userData: Omit<User, 'id' | 'role' | 'createdAt'> & { password: string }) => 
    Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

// Mock data
const mockUsers: Array<User & { password: string }> = [
  {
    id: '1',
    email: 'admin@mabrurx.com',
    password: 'admin123',
    name: 'Admin MabrurX',
    phone: '+6281234567890',
    address: 'Jakarta, Indonesia',
    role: 'admin',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    email: 'user@example.com',
    password: 'password123',
    name: 'Regular User',
    phone: '+6287654321098',
    address: 'Surabaya, Indonesia',
    role: 'user',
    createdAt: new Date().toISOString()
  }
];

// Auth store with localStorage persistence
export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      
      login: async (email: string, password: string) => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Find user by email
        const user = mockUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
        
        if (!user) {
          return { success: false, message: 'User not found' };
        }
        
        if (user.password !== password) {
          return { success: false, message: 'Invalid password' };
        }
        
        // Create a copy without the password
        const { password: _, ...userWithoutPassword } = user;
        
        // Create mock JWT token
        const token = `mock_jwt_token_${Math.random().toString(36).substring(2)}`;
        
        set({ 
          user: userWithoutPassword, 
          token, 
          isAuthenticated: true 
        });
        
        return { success: true };
      },
      
      register: async (userData) => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Check if email already exists
        if (mockUsers.some(u => u.email.toLowerCase() === userData.email.toLowerCase())) {
          return { success: false, message: 'Email already in use' };
        }
        
        // Create new user
        const newUser: User & { password: string } = {
          id: `user_${Math.random().toString(36).substring(2)}`,
          email: userData.email,
          name: userData.name,
          phone: userData.phone,
          address: userData.address,
          password: userData.password,
          role: 'user',
          createdAt: new Date().toISOString()
        };
        
        // Add to mock database
        mockUsers.push(newUser);
        
        // Create a copy without the password
        const { password: _, ...userWithoutPassword } = newUser;
        
        // Create mock JWT token
        const token = `mock_jwt_token_${Math.random().toString(36).substring(2)}`;
        
        set({ 
          user: userWithoutPassword, 
          token, 
          isAuthenticated: true 
        });
        
        return { success: true };
      },
      
      logout: () => {
        set({ user: null, token: null, isAuthenticated: false });
      },
      
      updateUser: (userData) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...userData } : null
        }));
      }
    }),
    {
      name: 'mabrurx-auth-storage',
    }
  )
);