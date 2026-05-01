"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const reasons = [
  {
    title: "Erfahrene Barbiere",
    desc: "Jahrelange Erfahrung & echtes Handwerk",
  },
  {
    title: "Hochwertige Produkte",
    desc: "Nur ausgewählte Pflegeprodukte",
  },
  {
    title: "Stil & Präzision",
    desc: "Jeder Schnitt sitzt – garantiert",
  },
  {
    title: "Entspannte Atmosphäre",
    desc: "Kein Stress, kein Termin nötig",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-[#0a0a0a] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="section-label">Wer wir sind</span>
          <span className="gold-line mt-3" />
          <h2 className="section-title max-w-xl">
            Handwerk,
            <br />
            das man spürt
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3
              className="text-[#f5f0e8] text-3xl lg:text-4xl font-bold mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Mirash
            </h3>
            <p className="text-[#c9a84c] text-sm tracking-[0.15em] uppercase mb-6">
              Inhaber & Gründer
            </p>

            <p className="text-[#9a9585] text-base leading-relaxed mb-5">
              Komm einfach rein. Kein Termin, kein Stress — und kein
              Einheitslook. Beim Mirash Barbershop bekommst du einen Schnitt,
              der wirklich sitzt, und eine Atmosphäre, in der du dich sofort
              wohlfühlst.
            </p>
            <p className="text-[#9a9585] text-base leading-relaxed mb-5">
              Mirash hat den Laden aufgebaut, weil er weiß, was einen guten
              Barbershop ausmacht. Sein Team bringt das Handwerk täglich auf
              den Punkt — mit Ruhe, Präzision und echtem Interesse an jedem
              Kunden.
            </p>
            <p className="text-[#9a9585] text-base leading-relaxed mb-10">
              Was als ein Standort begann, wächst. Heute findest du uns in
              Neuruppin und Oranienburg — und es werden mehr.
            </p>

            {/* Reasons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {reasons.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <svg className="text-[#c9a84c] mt-0.5 shrink-0" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <div>
                    <p className="text-[#f5f0e8] text-sm font-semibold mb-0.5">
                      {r.title}
                    </p>
                    <p className="text-[#9a9585] text-xs leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:max-w-none overflow-hidden border border-[#2a2a2a]">
              <Image
                src="/images/about-mirash.jpg"
                alt="Mirash – Inhaber Mirash Barbershop"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 via-transparent to-transparent" />
            </div>
            {/* Decorative gold border offset */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#c9a84c]/20 -z-10 hidden lg:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
