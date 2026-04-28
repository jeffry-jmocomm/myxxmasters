"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-60 pb-20 px-4 overflow-hidden bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-brand-cream bg-brand-teal flex items-center justify-center overflow-hidden"
                >
                  <Image
                    src={`/images/${i % 2 === 0 ? "wedding.png" : "hero.png"}`}
                    alt="User"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="text-sm font-bold text-brand-primary/80">
              Trusted by 50+ Orlando Event Planners
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black mb-8 leading-[1.1]"
          >
            Central Florida's
            <span className="pill-highlight-coral px-4 inline-block">
              most loved
            </span>{" "}
            <span className="whitespace-nowrap">mobile bar service.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-brand-primary/70 mb-10 max-w-2xl mx-auto font-medium"
          >
            We don't just serve drinks. We handle the logistics so you can focus
            on the party. Licensed, Insured, and Always On Time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="#booking">
              <button className="btn-primary text-lg px-8 py-4 flex items-center group">
                Book Your Date
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/services">
              <button className="text-brand-primary font-bold text-lg hover:underline underline-offset-4">
                View Packages →
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Image Grid / Collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
        >
          <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-soft rotate-[-2deg]">
            <Image
              src="/images/hero.png"
              alt="Hero"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-soft translate-y-8 rotate-[3deg]">
            <Image
              src="/images/wedding.png"
              alt="Wedding"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-soft rotate-[-1deg]">
            <Image
              src="/images/corporate.png"
              alt="Corporate"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-soft translate-y-4 rotate-[2deg]">
            <Image
              src="/images/festival.png"
              alt="Festival"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
