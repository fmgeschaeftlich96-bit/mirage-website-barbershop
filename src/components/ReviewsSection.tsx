"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reviews = [
  {
    name: "Mahmood Kadro",
    rating: 5,
    text: "Es ist ein sehr schöner Laden. Sie haben mir die Haare genau so geschnitten, wie ich es wollte, sogar noch besser. Ich bin sehr zufrieden. Das Personal dort ist sehr nett. Der Service ist sehr gut, es gibt Tee und Kaffee. Es ist ein sehr sauberer Laden.",
    date: "vor 8 Monaten",
  },
  {
    name: "Behjet Sindi",
    rating: 5,
    text: "Schöner sauberer Laden. Mit freundlichen und sehr guten Personal. Nette Begrüßung mit Getränk. Und Haare schneiden tun sie absolut super. Ich kann den Laden nur weiterempfehlen. sehr sehr nett",
    date: "vor 2 Monaten",
  },
  {
    name: "Christian Kurzweg",
    rating: 5,
    text: "Ich war vormittags an einem Wochentag dort und war vollkommen zufrieden!! Ich wurde freundlich begrüßt, mir wurde ein Getränk angeboten und die Haare wurden genau so geschnitten wie ich es mir vorgestellt habe. Werde auf jeden Fall wieder dort hin gehen!!",
    date: "vor 6 Monaten",
  },
  {
    name: "Pascal Pasold",
    rating: 5,
    text: "die atmosphäre ist immer freundlich und es ist immer sehr sauber. der junge kollege hat sich viel zeit genommen und sehr ordentlich und gut gearbeitet. dazu war er sehr freundlich und ist auf jeden wunsch eingegangen. sehr gute arbeit! vielen dank! ich komme gerne wieder.",
    date: "Bearbeitet: vor 3 Monaten",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill={i < count ? "#c9a84c" : "none"}
          stroke="#c9a84c"
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export default function ReviewsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0a0a0a] border-y border-[#1a1a1a] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 mb-8 lg:mb-10"
        >
          <div className="flex items-center gap-4">
            <GoogleIcon />
            <div>
              <div className="flex items-center gap-2">
                <span
                  className="text-[#f5f0e8] text-2xl font-bold"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  4,9
                </span>
                <Stars count={5} />
              </div>
              <p className="text-[#9a9585] text-xs mt-0.5 tracking-wide">
                Google Bewertung
              </p>
            </div>
          </div>
          <div className="h-px sm:h-auto sm:w-px bg-[#2a2a2a] flex-1 sm:flex-none sm:self-stretch mx-0 sm:mx-6" />
          <p className="text-[#9a9585] text-xs tracking-[0.15em] uppercase">
            Echte Kundenstimmen
          </p>
        </motion.div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              className="bg-[#111111] border border-[#1a1a1a] hover:border-[#c9a84c]/20 transition-colors duration-300 p-5 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <Stars count={review.rating} />
                <div className="flex items-center gap-1.5 text-[#9a9585]/50 text-[10px] tracking-wider uppercase">
                  <GoogleIcon />
                  <span>Google</span>
                </div>
              </div>
              <p className="text-[#9a9585] text-sm leading-relaxed flex-1">
                „{review.text}"
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-[#1e1e1e]">
                <span className="text-[#f5f0e8] text-sm font-semibold">
                  {review.name}
                </span>
                <span className="text-[#9a9585]/60 text-xs">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
