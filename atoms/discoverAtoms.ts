import { atom } from "jotai";

interface PriceRange {
  min: number | null;
  max: number | null;
}

interface BuildingStats {
  minHeight: number | null;
  maxHeight: number | null;
  minFloors: number | null;
  maxFloors: number | null;
  minUnits: number | null;
  maxUnits: number | null;
  minRetailCenters: number | null;
  maxRetailCenters: number | null;
  minElevators: number | null;
  maxElevators: number | null;
}

interface InvestmentMetrics {
  minROI: number | null;
  maxROI: number | null;
  minOccupancy: number | null;
  maxOccupancy: number | null;
  minPeriod: number | null;
  maxPeriod: number | null;
}

export const priceRangeAtom = atom<PriceRange>({
  min: null,
  max: null,
});

export const buildingStatsAtom = atom<BuildingStats>({
  minHeight: null,
  maxHeight: null,
  minFloors: null,
  maxFloors: null,
  minUnits: null,
  maxUnits: null,
  minRetailCenters: null,
  maxRetailCenters: null,
  minElevators: null,
  maxElevators: null,
});

export const investmentMetricsAtom = atom<InvestmentMetrics>({
  minROI: null,
  maxROI: null,
  minOccupancy: null,
  maxOccupancy: null,
  minPeriod: null,
  maxPeriod: null,
});

export const propertyTypeAtom = atom<string>("all");

export const locationAtom = atom<string>("all");

export const searchAtom = atom<string>("");

export const termAtom = atom<string>("all");

export const amenitiesAtom = atom<string[]>([]);
