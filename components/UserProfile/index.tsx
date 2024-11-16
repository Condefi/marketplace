"use client";

import KintoLogo from "@/assets/kinto.svg";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { kintoSDK } from "@/lib/kintoSDK";
import { truncateAddress } from "@/lib/utils";
import { useUserStore } from "@/state/userStore";
import { Info } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDisconnect } from "wagmi";
import NetworkSwitch from "../NetworkSwitch";
import { Button } from "../ui/button";

export const UserModal = () => {
  const accountInfo = useUserStore((state) => state.accountInfo);

  if (accountInfo?.walletAddress) {
    return <WalletConnected />;
  }

  return <WalletNotConnected />;
};

const WalletInfo = () => {
  const accountInfo = useUserStore((state) => state.accountInfo);
  const items = [
    {
      label: "Wallet Address",
      value: truncateAddress(accountInfo?.walletAddress ?? ""),
      tooltip: "Your wallet address",
      showTooltip: true,
    },
    {
      label: "Approval Status",
      value: accountInfo?.approval ? "Approved" : "Pending",
      tooltip: "Your approval status",
      showTooltip: true,
    },
  ];

  return (
    <div className="p-4 rounded-lg border border-gray-300 dark:border-neutral-700">
      <div className="flex flex-col space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">{item.label}</span>
              {item.showTooltip && (
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="w-4 h-4 text-blue-400" />
                  </TooltipTrigger>
                  <TooltipContent>{item.tooltip}</TooltipContent>
                </Tooltip>
              )}
            </div>
            <span className="font-mono">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const WalletNotConnected = () => {
  const accountInfo = useUserStore((state) => state.accountInfo);
  const setAccountInfo = useUserStore((state) => state.setAccountInfo);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchAccountInfo() {
    try {
      setIsLoading(true);
      await kintoSDK.createNewWallet();
      const info = await kintoSDK.connect();
      setAccountInfo(info);
    } catch (error) {
      console.error("Failed to fetch account info:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const info = await kintoSDK.connect();
      setAccountInfo(info);
      setIsLoading(false);
    })();
  }, [setAccountInfo]);

  return (
    <Modal>
      <ModalTrigger>
        <HoverBorderGradient className="text-xs sm:text-sm font-medium text-primary-foreground">
          <span className="w-auto text-primary z-10 bg-background  py-2 rounded-[inherit]">
            {accountInfo?.walletAddress
              ? truncateAddress(accountInfo.walletAddress)
              : isLoading
              ? "Loading account..."
              : "Connect Wallet"}
          </span>
        </HoverBorderGradient>
      </ModalTrigger>
      <ModalBody className="!m-6">
        <ModalContent className="space-y-4 md:!p-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            User Profile
          </h2>
          <div className="space-y-4">
            <div
              className="flex items-center justify-between gap-2  border border-gray-300 dark:border-neutral-700 transition rounded-lg cursor-pointer"
              onClick={() => {
                fetchAccountInfo();
              }}
            >
              <div className="flex items-center gap-2 p-4">
                <Image
                  src={KintoLogo}
                  alt="Kinto Logo"
                  width={24}
                  height={24}
                />
                <span className="text-md bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-300 dark:to-gray-400 bg-clip-text text-transparent font-bold">
                  Kinto
                </span>
              </div>
              <Button className="text-sm mr-4 bg-gradient-to-r from-gray-300 to-gray-400 text-white hover:from-gray-400 hover:to-gray-500 text-primary-foreground">
                Connect
              </Button>
            </div>
          </div>
        </ModalContent>
        <ModalFooter className="flex flex-col items-center">
          <p className="text-sm text-gray-500 text-center">
            Connect with Kinto to get started
          </p>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
};

const WalletConnected = () => {
  const accountInfo = useUserStore((state) => state.accountInfo);
  const { disconnect } = useDisconnect();

  return (
    <Modal>
      <ModalTrigger>
        <HoverBorderGradient className="text-xs sm:text-sm font-medium text-primary-foreground">
          <span className="w-auto text-primary z-10 bg-background px-2 sm:px-4 py-2 rounded-[inherit]">
            {truncateAddress(accountInfo?.walletAddress ?? "")}
          </span>
        </HoverBorderGradient>
      </ModalTrigger>
      <ModalBody className="!m-6">
        <ModalContent className="space-y-6 md:!p-6">
          <div className="flex flex-row tems-center justify-between">
            <div className="flex flex-col items-start gap-2">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Kinto Account
              </h2>
              <p className="text-sm text-gray-500">
                We have connected your account with Kinto social login and
                integrated Smart Account. All transactions are gasless since the
                Paymaster will cover the gas fees for your transactions.{" "}
                <span
                  className="text-blue-500 underline cursor-pointer"
                  onClick={() => {
                    window.open("https://kinto.xyz/", "_blank");
                  }}
                >
                  Read more
                </span>
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <WalletInfo />
            <NetworkSwitch />
          </div>
          <Button
            variant="outline"
            onClick={() => disconnect()}
            className="hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors"
          >
            Disconnect
          </Button>
        </ModalContent>

        <ModalFooter className="flex flex-col items-center pt-4 border-t">
          <p className="text-sm text-gray-500 text-center">
            Connected with Kinto
          </p>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
};

export default UserModal;
