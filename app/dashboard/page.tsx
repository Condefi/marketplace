"use client";

import Portfolio from "@/components/Portfolio";
import UserProperties from "@/components/UserProperties";
import UserPropertyHistory from "@/components/UserPropertyHistory";
import { useUserPropertiesStore } from "@/state/useUserPropertiesStore";

export default function Dashboard() {
  const { userProperties } = useUserPropertiesStore();
  return (
    <div className="relative min-h-screen pt-24 px-8">
      <Portfolio properties={userProperties} />
      <UserProperties userProperties={userProperties} />
      <UserPropertyHistory pastUserProperties={userProperties} />
    </div>
  );
}
