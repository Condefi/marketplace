"use client";

import DiscoverProperties from "@/components/DiscoverProperties";
import Properties from "@/components/Properties";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Fund() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const staggerDelay = 0.2;

  return (
    <div className="relative min-h-screen pt-24 px-8 flex flex-col gap-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <DiscoverProperties />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: staggerDelay * 2 }}
      >
        <Properties />
      </motion.div>
    </div>
  );
}
