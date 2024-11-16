export type Property = {
  id: string;
  campaignId: string;
  name: string;
  description: string;
  image: string;
  external_url: string;
  attributes: {
    trait_type: string;
    value: string | number;
    unit?: string;
    display_type?: string;
    trait_count?: number;
  }[];
  properties: {
    amenities: string[];
    building_stats: {
      height: number;
      floors: number;
      total_units: number;
      retail_centers: number;
      elevators: number;
    };
    investment_metrics: {
      projected_roi: number;
      projected_occupancy: number;
      projection_period: number;
    };
  };
  treasury: {
    minDeposit: number;
    maxDeposit: number;
    deadline: number;
  };
};
