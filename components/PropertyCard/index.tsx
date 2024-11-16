"use client";

import PlaceholderImage from "@/assets/properties/placeholder.webp";
import { cn } from "@/lib/utils";
import { Property } from "@/types/property";
import {
  Calendar,
  DollarSign,
  Home,
  MapPin,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";

const PropertyCard = ({
  image,
  name,
  description,
  treasury,
  properties,
  width = 300,
  height = 300,
  fill = false,
}: Property & { width?: number; height?: number; fill?: boolean }) => {
  const progress = (treasury.minDeposit / treasury.maxDeposit) * 100;
  const deadline = new Date(treasury.deadline * 1000).toLocaleDateString();

  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-700 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow",
        fill ? "w-full" : "w-[400px]"
      )}
    >
      <div className="relative w-full h-48">
        <Image
          src={image || PlaceholderImage}
          alt={name}
          {...(fill
            ? { fill: true, className: "object-cover w-full h-full" }
            : { width, height, className: "object-cover" })}
          priority
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {name}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {description}
        </p>
        <div className="space-y-4">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="h-2 rounded-full bg-blue-600"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <DollarSign className="h-4 w-4 mr-2" />$
              {treasury.minDeposit.toLocaleString()} raised
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <Users className="h-4 w-4 mr-2" />
              {properties.building_stats.total_units} units
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <MapPin className="h-4 w-4 mr-2" />
              {/* Location needs to be added to Property type */}
              Location
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <Home className="h-4 w-4 mr-2" />
              {/* Property type needs to be added to Property type */}
              Property Type
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <TrendingUp className="h-4 w-4 mr-2" />
              {properties.investment_metrics.projected_roi}% ROI
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <Calendar className="h-4 w-4 mr-2" />
              Ends {deadline}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
