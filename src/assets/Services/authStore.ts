import {create} from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isloggedin: boolean;
  login: () => void;
  logout: () => void;
}

const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      isloggedin: false,
      login: () => {
        set({ isloggedin: true });
      },
      logout: () => {
        set({ isloggedin: false });
      },
    }),
    {
      name: 'auth-storage', // name of the item in the storage (must be unique)
    }
  )
);

export default useAuthStore;
