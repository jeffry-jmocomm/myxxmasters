"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "MYXX Masters gives us all the tools we need to deliver a magical experience for our guests every week. Their team is impeccable.",
    author: "Sarah Jenkins",
    role: "Lead Planner, Orlando Luxe Events",
    image: "/images/hero.png", // Using hero as placeholder for person
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16 max-w-5xl mx-auto">
          {/* Profile Image */}
          <div className="flex-1 w-full">
            <div className="relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl rotate-[-2deg]">
              <Image
                src={testimonials[0].image}
                alt={testimonials[0].author}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Quote Card */}
          <div className="flex-[1.2] relative">
            <Quote className="w-20 h-20 text-brand-accent/20 absolute -top-10 -left-10" />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight italic">
                "{testimonials[0].quote}"
              </h2>
              <div>
                <h4 className="text-xl font-black text-brand-primary">{testimonials[0].author}</h4>
                <p className="text-brand-primary/60 font-bold uppercase tracking-widest text-xs">{testimonials[0].role}</p>
              </div>
              
              <div className="mt-12 flex gap-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full card-yellow flex items-center justify-center">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
