"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Heart, ShieldCheck, Star, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar isDark />

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6 overflow-hidden bg-brand-primary text-brand-cream">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="pill-highlight px-4 text-brand-primary mb-6 inline-block font-bold">
                The Story
              </span>
              <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight italic">
                From Vain to
                <span className="text-brand-accent"> Vision.</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-cream/80 font-medium leading-relaxed max-w-xl">
                Founded by Michael Young, MYXX Masters was born from a passion
                for the energy, craft, and connection that happens behind the
                bar.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl rotate-[2deg] border-8 border-brand-cream/10"
            >
              <Image
                src="/images/hero.png"
                alt="Michael Young"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/5 -skew-x-12 transform translate-x-1/2" />
      </section>

      {/* The Origin Story */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heart className="w-16 h-16 text-brand-accent mx-auto mb-8" />
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
              It started with <br />
              <span className="pill-highlight px-6">a spark in 2011.</span>
            </h2>
            <p className="text-xl md:text-2xl text-brand-primary/70 font-medium leading-relaxed mb-12">
              "I fell in love with bartending at an event in 2011. The
              bartenders were so energetic, and I saw in their faces that they
              truly loved what they did. I wanted that same feeling—and I wanted
              to give that same feeling to every client I served."
            </p>
            <div className="h-1 w-24 bg-brand-accent mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Philosophy & Stats */}
      <section className="py-32 px-6 bg-brand-primary/[0.03]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-cream p-12 rounded-[3rem] shadow-soft border border-brand-primary/5"
            >
              <Award className="w-12 h-12 text-brand-teal mb-6" />
              <h3 className="text-2xl font-black mb-4">Certified Craft</h3>
              <p className="text-lg font-medium text-brand-primary/70 leading-relaxed">
                Certified in mixology by the 123 Bartending School with over 5
                years of professional high-volume experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-brand-cream p-12 rounded-[3rem] shadow-soft border border-brand-primary/5"
            >
              <Users className="w-12 h-12 text-brand-yellow mb-6" />
              <h3 className="text-2xl font-black mb-4">Flexible & Fair</h3>
              <p className="text-lg font-medium text-brand-primary/70 leading-relaxed">
                We believe in negotiation and working within reasonable budgets.
                We don't just serve drinks; we partner with you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-brand-cream p-12 rounded-[3rem] shadow-soft border border-brand-primary/5"
            >
              <ShieldCheck className="w-12 h-12 text-brand-accent mb-6" />
              <h3 className="text-2xl font-black mb-4">Peace of Mind</h3>
              <p className="text-lg font-medium text-brand-primary/70 leading-relaxed">
                Fully licensed and insured. Our process is seamless: we figure
                out the budget, we handle the gear, and then we party.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative h-[600px] rounded-[4rem] overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image
                src="/images/wedding.png"
                alt="Event Service"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 to-transparent" />
              <div className="absolute bottom-10 left-10 text-brand-cream">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-brand-yellow text-brand-yellow"
                    />
                  ))}
                </div>
                <p className="text-2xl font-black italic">
                  "He became part of the family."
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
                More than just <br />
                <span className="pill-highlight px-6">a service.</span>
              </h2>
              <p className="text-xl text-brand-primary/70 font-medium leading-relaxed mb-10">
                Michael's typical process is simple: figure out the event, find
                a budget that works, and then focus on the celebration. Whether
                it's a "Celebration of Life" or a high-energy "Wedding
                Reception," Michael and his team ensure every guest is social,
                engaged, and attentive.
              </p>
              <button className="btn-primary text-xl px-12 py-5">
                Work with Michael →
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
