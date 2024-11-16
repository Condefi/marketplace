import { allProperties } from "@/mock/properties";
import { Property } from "@/types/property";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PropertiesState {
  allProperties: Property[];
  setAllProperties: (properties: Property[]) => void;
  addProperty: (property: Property) => void;
  removeProperty: (id: string) => void;
  updateProperty: (id: string, property: Partial<Property>) => void;
}

export const usePropertiesStore = create<PropertiesState>()(
  persist(
    (set) => ({
      allProperties: allProperties,
      setAllProperties: (properties) => set({ allProperties: properties }),
      addProperty: (property) =>
        set((state) => ({
          allProperties: [...state.allProperties, property],
        })),

      removeProperty: (id) =>
        set((state) => ({
          allProperties: state.allProperties.filter(
            (property) => property.id !== id
          ),
        })),

      updateProperty: (id, updatedProperty) =>
        set((state) => ({
          allProperties: state.allProperties.map((property) =>
            property.id === id ? { ...property, ...updatedProperty } : property
          ),
        })),
    }),
    {
      name: "properties-storage",
    }
  )
);
