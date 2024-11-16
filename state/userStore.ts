import { KintoAccountInfo } from "kinto-web-sdk";
import { create } from "zustand";

interface UserState {
  accountInfo: KintoAccountInfo | null;
  setAccountInfo: (info: KintoAccountInfo | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
  accountInfo: null,
  setAccountInfo: (info) => set({ accountInfo: info }),
}));
