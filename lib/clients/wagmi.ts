/**
 * @file Wagmi Configuration
 * @description This file sets up the Wagmi configuration for the application, including wallet connectors and chain configurations.
 */

import { Chain, defineChain } from "viem";
import { createConfig, http } from "wagmi";

export const kinto: Chain = defineChain({
  id: 7887,
  name: "Kinto",
  network: "kinto",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.kinto-rpc.com/"],
      webSocket: ["wss://rpc.kinto.xyz/ws"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://explorer.kinto.xyz/" },
  },
});
export const wagmiConfig = createConfig({
  chains: [kinto],
  transports: {
    [kinto.id]: http(),
  },
});
