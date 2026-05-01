"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "4,9 ★", label: "Google Bewertung" },
  { value: "500+", label: "Zufriedene Kunden" },
  { value: "2", label: "Standorte" },
  { value: "Immer", label: "Ohne Termin" },
];

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="border-y border-[#1a1a1a] bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 lg:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#1a1a1a]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center lg:px-8"
            >
              <span
                className="text-[#c9a84c] text-3xl lg:text-4xl font-bold leading-none mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {stat.value}
              </span>
              <span className="text-[#9a9585] text-xs tracking-[0.12em] uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
