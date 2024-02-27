import { create } from "zustand";

type role = "Admin" | "Manager" | undefined;

interface RoleStoreInterface {
  role: role;
  setRole: (role: role) => void;
}

const useRoleStore = create<RoleStoreInterface>((set) => ({
  role: undefined,
  setRole: (role) => set({ role }),
}));

export default useRoleStore;
