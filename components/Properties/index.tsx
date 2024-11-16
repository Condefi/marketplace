"use client";

import {
  locationAtom,
  priceRangeAtom,
  propertyTypeAtom,
  termAtom,
} from "@/atoms/discoverAtoms";
import PropertyCard from "@/components/PropertyCard";
import { usePropertiesStore } from "@/state/usePropertiesStore";
import { Property } from "@/types/property";
import { useAtom } from "jotai";
import Link from "next/link";

const Properties = () => {
  const [priceRange] = useAtom(priceRangeAtom);
  const [propertyType] = useAtom(propertyTypeAtom);
  const [location] = useAtom(locationAtom);
  const [term] = useAtom(termAtom);

  const { allProperties } = usePropertiesStore();

  const filteredProperties = allProperties?.filter((property: Property) => {
    const priceInRange =
      (!priceRange.min || property.treasury.minDeposit >= priceRange.min) &&
      (!priceRange.max || property.treasury.minDeposit <= priceRange.max);

    // Get property type from attributes
    const propertyTypeAttribute = property.attributes.find(
      (attr) => attr.trait_type === "property_type"
    );
    const matchesPropertyType =
      propertyType === "all" ||
      (propertyTypeAttribute && propertyTypeAttribute.value === propertyType);

    // Get location from attributes
    const locationAttribute = property.attributes.find(
      (attr) => attr.trait_type === "location"
    );
    const matchesLocation =
      location === "all" ||
      (locationAttribute && locationAttribute.value === location);

    // Get term from attributes
    const termAttribute = property.attributes.find(
      (attr) => attr.trait_type === "term"
    );
    const matchesTerm =
      term === "all" || (termAttribute && termAttribute.value === term);

    return (
      priceInRange && matchesPropertyType && matchesLocation && matchesTerm
    );
  });

  return (
    <section className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Properties
        </h2>
      </div>
      {filteredProperties?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties?.map((property: Property) => (
            <Link href={`/marketplace/${property.id}`} key={property.id}>
              <PropertyCard {...property} fill />
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          No campaigns found matching your filters. Try adjusting your search
          criteria.
        </div>
      )}
    </section>
  );
};

export default Properties;
