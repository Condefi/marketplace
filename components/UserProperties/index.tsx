"use client";

import PropertyCard from "@/components/PropertyCard";
import { Property } from "@/types/property";
import Link from "next/link";

const UserProperties = ({ userProperties }: { userProperties: Property[] }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Active Investments
      </h2>
      <div className="flex flex-row gap-6">
        {userProperties.map((property: Property) => (
          <Link href={`/marketplace${property.id}`} key={property.id}>
            <PropertyCard {...property} fill />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default UserProperties;
