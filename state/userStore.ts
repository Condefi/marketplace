import { KintoAccountInfo } from "kinto-web-sdk";
import { Address } from "viem";
import { create } from "zustand";

export interface KYCViewerInfo {
  isIndividual: boolean;
  isCorporate: boolean;
  isKYC: boolean;
  isSanctionsSafe: boolean;
  getCountry: string;
  getWalletOwners: Address[];
}

interface UserState {
  accountInfo: KintoAccountInfo | null;
  setAccountInfo: (info: KintoAccountInfo | null) => void;
  kycViewerInfo: KYCViewerInfo | null;
  setKycViewerInfo: (info: KYCViewerInfo | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
  accountInfo: null,
  setAccountInfo: (info) => set({ accountInfo: info }),
  kycViewerInfo: null,
  setKycViewerInfo: (info) => set({ kycViewerInfo: info }),
}));
