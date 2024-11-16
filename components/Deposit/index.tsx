"use client";

import { Property } from "@/types/property";
import { AlertCircle, Wallet } from "lucide-react";
import { Input } from "../ui/input";
import { RainbowButton } from "../ui/rainbow-button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const Deposit = ({ property }: { property: Property }) => {
  return (
    <div className="sticky top-24 bg-white rounded-lg dark:bg-transparent dark:border dark:border-input">
      <Tabs defaultValue="buy" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="buy">Buy</TabsTrigger>
          <TabsTrigger value="sell">Sell</TabsTrigger>
        </TabsList>

        <TabsContent value="buy">
          <form className="space-y-6 p-6 rounded-lg">
            <div>
              <label className="block text-sm font-medium mb-2">
                Investment Amount
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-accent sm:text-sm">$</span>
                </div>
                <Input
                  type="number"
                  min={property?.treasury.minDeposit}
                  className="pl-7"
                  defaultValue={property?.treasury.minDeposit}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Currency</label>
              <Select defaultValue="USDT">
                <SelectTrigger>
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USDT">USDT</SelectItem>
                  <SelectItem value="USDC">USDC</SelectItem>
                  <SelectItem value="DAI">DAI</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-md">
              <div className="flex">
                <AlertCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">
                    Important Information
                  </h3>
                  <div className="mt-2 text-sm text-blue-700 dark:text-blue-300">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Minimum investment: ${property?.treasury.minDeposit}
                      </li>
                      <li>
                        Tokens will be locked in escrow until funding ends
                      </li>
                      <li>Refunds available if target not met</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <RainbowButton
              className="bg-gradient-to-r from-blue-600 to-purple-600 w-full"
              type="submit"
            >
              <Wallet className="mr-2 h-5 w-5" />
              Buy
            </RainbowButton>
          </form>
        </TabsContent>

        <TabsContent value="sell">
          <form className="space-y-6 p-6 rounded-lg">
            <div>
              <label className="block text-sm font-medium mb-2">
                Sell Amount
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-accent sm:text-sm">$</span>
                </div>
                <Input
                  type="number"
                  className="pl-7"
                  placeholder="Enter amount to sell"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Currency</label>
              <Select defaultValue="USDT">
                <SelectTrigger>
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USDT">USDT</SelectItem>
                  <SelectItem value="USDC">USDC</SelectItem>
                  <SelectItem value="DAI">DAI</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <RainbowButton
              className="bg-gradient-to-r from-blue-600 to-purple-600 w-full"
              type="submit"
            >
              <Wallet className="mr-2 h-5 w-5" />
              Sell
            </RainbowButton>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Deposit;
