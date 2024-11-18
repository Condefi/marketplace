"use client";

import PlaceholderImage from "@/assets/properties/placeholder.webp";
import Deposit from "@/components/Deposit";
import FinancialDetails from "@/components/FinancialDetails";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyOverview from "@/components/PropertyOverview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePropertiesStore } from "@/state/usePropertiesStore";
import Image from "next/image";
import NotFound from "./not-found";

const CampaignPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { allProperties } = usePropertiesStore();
  const property = allProperties.find((property) => property.id === id);

  if (!property) {
    return <NotFound />;
  }

  return (
    <div className="relative min-h-screen">
      <div className="w-full h-[400px] relative">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <Image
          src={property?.image || PlaceholderImage}
          alt={property?.name || ""}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 bg-gradient-to-t from-black/70 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-bold text-white drop-shadow-2xl">
                {property?.name}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl shadow-sm p-6 mb-6 border border-input">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-sm text-accent">Target IRR</p>
                  <p className="text-xl font-semibold text-foreground">12.5%</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-accent">Min Investment</p>
                  <p className="text-xl font-semibold text-foreground">$100</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-accent">Property Type</p>
                  <p className="text-xl font-semibold text-foreground">
                    Residential
                  </p>
                </div>
              </div>
            </div>

            <Tabs defaultValue="overview" className="w-full ">
              <TabsList className="border-b space-x-8 px-6">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-gradient-to-r data-[state=active]:from-gradient-start data-[state=active]:to-gradient-end pb-4 -mb-px"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="details"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-gradient-to-r data-[state=active]:from-gradient-start data-[state=active]:to-gradient-end pb-4 -mb-px"
                >
                  Property Details
                </TabsTrigger>
                <TabsTrigger
                  value="financials"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-gradient-to-r data-[state=active]:from-gradient-start data-[state=active]:to-gradient-end pb-4 -mb-px"
                >
                  Financials
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="p-6">
                <PropertyOverview property={property} />
              </TabsContent>
              <TabsContent value="details" className="p-6">
                <PropertyDetails />
              </TabsContent>

              <TabsContent value="details" className="p-6">
                <FinancialDetails />
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 ">
              <Deposit property={property} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignPage;
