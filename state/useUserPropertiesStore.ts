import { allProperties } from "@/mock/properties";
import { Property } from "@/types/property";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserPropertiesState {
  userProperties: Property[];
  setUserProperties: (properties: Property[]) => void;
  addUserProperty: (property: Property) => void;
  removeUserProperty: (id: string) => void;
}

export const useUserPropertiesStore = create<UserPropertiesState>()(
  persist(
    (set) => ({
      userProperties: [...allProperties],

      setUserProperties: (properties) => set({ userProperties: properties }),

      addUserProperty: (property) =>
        set((state) => ({
          userProperties: [...state.userProperties, property],
        })),

      removeUserProperty: (id) =>
        set((state) => ({
          userProperties: state.userProperties.filter(
            (property) => property.id !== id
          ),
        })),
    }),
    {
      name: "user-properties-storage",
    }
  )
);
