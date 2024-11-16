import contractJSON from "@/lib/abis/7887.json";
import { KYCViewerInfo, useUserStore } from "@/state/userStore";
import { useEffect } from "react";
import { Address } from "viem";
import { useReadContracts } from "wagmi";

export const useGetKycViewerInfo = (walletAddress?: string) => {
  const setKYCViewerInfo = useUserStore((state) => state.setKycViewerInfo);

  const kycViewerContract = {
    address: contractJSON.contracts.KYCViewer.address as Address,
    abi: contractJSON.contracts.KYCViewer.abi,
  } as const;

  const { data } = useReadContracts({
    contracts: [
      {
        ...kycViewerContract,
        functionName: "isIndividual",
        args: [walletAddress ?? "0x0"],
      },
      {
        ...kycViewerContract,
        functionName: "isCompany",
        args: [walletAddress ?? "0x0"],
      },
      {
        ...kycViewerContract,
        functionName: "isKYC",
        args: [walletAddress ?? "0x0"],
      },
      {
        ...kycViewerContract,
        functionName: "isSanctionsSafe",
        args: [walletAddress ?? "0x0"],
      },
      {
        ...kycViewerContract,
        functionName: "getCountry",
        args: [walletAddress ?? "0x0"],
      },
      {
        ...kycViewerContract,
        functionName: "getWalletOwners",
        args: [walletAddress ?? "0x0"],
      },
    ],
  });

  const [
    isIndividual,
    isCorporate,
    isKYC,
    isSanctionsSafe,
    country,
    walletOwners,
  ] = data || [];

  useEffect(() => {
    if (
      isIndividual?.result !== undefined &&
      isCorporate?.result !== undefined &&
      isKYC?.result !== undefined &&
      isSanctionsSafe?.result !== undefined &&
      country?.result !== undefined &&
      walletOwners?.result !== undefined
    ) {
      setKYCViewerInfo({
        isIndividual: isIndividual.result as boolean,
        isCorporate: isCorporate.result as boolean,
        isKYC: isKYC.result as boolean,
        isSanctionsSafe: isSanctionsSafe.result as boolean,
        getCountry: country.result,
        getWalletOwners: walletOwners.result,
      } as KYCViewerInfo);
    }
  }, [
    isIndividual,
    isCorporate,
    isKYC,
    isSanctionsSafe,
    country,
    walletOwners,
    setKYCViewerInfo,
  ]);

  return {
    isIndividual: isIndividual?.result as boolean | undefined,
    isCorporate: isCorporate?.result as boolean | undefined,
    isKYC: isKYC?.result as boolean | undefined,
    isSanctionsSafe: isSanctionsSafe?.result as boolean | undefined,
    country: country?.result,
    walletOwners: walletOwners?.result as Address[] | undefined,
  };
};
