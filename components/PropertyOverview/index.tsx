"use client";

import { Property } from "@/types/property";

const PropertyOverview = ({ property }: { property: Property }) => {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Property Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Investment Range</span>
                <span className="text-sm font-medium">
                  ${property?.treasury.minDeposit} - $
                  {property?.treasury.maxDeposit}
                </span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Deadline</span>
                <span className="text-sm font-medium">
                  {new Date(property?.treasury.deadline).toLocaleDateString()}
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-accent">Projected ROI</span>
                <span className="text-sm font-medium">
                  {property?.properties.investment_metrics.projected_roi}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-accent">Projected Occupancy</span>
                <span className="text-sm font-medium">
                  {property?.properties.investment_metrics.projected_occupancy}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-accent">Projection Period</span>
                <span className="text-sm font-medium">
                  {property?.properties.investment_metrics.projection_period}{" "}
                  years
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyOverview;
