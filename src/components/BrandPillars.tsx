"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Award, Star, Zap, Heart } from "lucide-react";

const pillars = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Licensed & Insured",
    description: "Total peace of mind with $2M liability insurance.",
    colorClass: "card-coral",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "100% On-Time",
    description: "We arrive 90 minutes early. No exceptions.",
    colorClass: "card-teal",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Expert Mixology",
    description: "Fresh-pressed juices and craft signature syrups.",
    colorClass: "card-yellow",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Speed of Service",
    description: "Zero lines. Just fast, professional pours.",
    colorClass: "card-lavender",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Planner Approved",
    description: "The bar service Orlando planners trust most.",
    colorClass: "card-teal",
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Eco-Friendly",
    description: "Sustainable waste management at every event.",
    colorClass: "card-coral",
  },
];

export default function BrandPillars() {
  return (
    <section id="about" className="py-24 bg-brand-primary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4"
          >
            Why Myxxmaster?
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-brand-cream mb-4">
            Design, manage, and <br />
            <span className="pill-highlight px-6 text-brand-primary">simplify your event bar.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`${pillar.colorClass} p-10 rounded-[3rem] flex flex-col justify-between h-64 shadow-soft hover:-translate-y-2 transition-transform duration-300`}
            >
              <div>
                <div className="mb-4">{pillar.icon}</div>
                <h3 className="text-2xl font-black mb-2">{pillar.title}</h3>
                <p className="text-lg font-medium opacity-80 leading-tight">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
