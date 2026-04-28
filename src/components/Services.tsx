"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Weddings",
    image: "/images/wedding.png",
    description:
      "Elegant, stress-free service that complements your vision. We handle everything from the champagne toast to signature cocktails.",
    points: [
      "Custom Cocktail Menus",
      "Glassware & Ice Included",
      "State-Certified Staff",
    ],
    cta: "Plan Your Wedding Bar",
    href: "/services",
  },
  {
    title: "Corporate Events",
    image: "/images/corporate.png",
    description:
      "Professional, scalable service for 100+ guests. Invoicing, non-alcoholic options, and clean execution for your brand.",
    points: [
      "Capacity for 1,000+ Guests",
      "Branded Bar Experience",
      "Quick-Pore Efficiency",
    ],
    cta: "Book Your Corporate Event",
    href: "/services",
  },
  {
    title: "Festivals & Large Events",
    image: "/images/festival.png",
    description:
      "High-volume efficiency without sacrificing safety. Expert ID checks, waste management, and rapid-fire service.",
    points: [
      "Rapid Response Staffing",
      "Waste Management Included",
      "Strict ID Compliance",
    ],
    cta: "Scale Your Festival Bar",
    href: "/services",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 border-b border-brand-primary/10 bg-brand-teal/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Run your next event <br />
            <span className="pill-highlight px-6">like a boss.</span>
          </h2>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-16`}
            >
              <div className="flex-1">
                <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                  {service.title}
                </h3>
                <p className="text-xl text-brand-primary/70 mb-8 font-medium max-w-lg">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {service.points.map((point, pIndex) => (
                    <li
                      key={pIndex}
                      className="flex items-center gap-3 text-lg font-bold"
                    >
                      <CheckCircle2 className={`w-6 h-6 text-brand-teal`} />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link href={service.href}>
                  <button className="btn-primary mt-10 group flex items-center gap-3">
                    {service.cta}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
              <div className="flex-1 w-full">
                <div className="relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-brand-primary/5">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
