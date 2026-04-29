"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Michael was awesome, drinks were great! As the bride, he made sure my glass was always full. We couldn't have asked for a better bartender! From start to finish it was smooth sailing!",
    author: "Bianca M.",
    role: "Bride",
    image: "/images/wedding.png",
  },
  {
    quote:
      "Mike is absolutely awesome!!!! I wish he was the bartender at every bar in America!! I definitely, unequivocally recommend Mike for any and every event!! He's in the hall of fame in my book!",
    author: "Sterling R.",
    role: "Event Host",
    image: "/images/hero.png",
  },
  {
    quote:
      "Connected with Mike and he offered several different options for our celebration. He was responsive, offered a great deal and followed up several times. Hilda was also amazing!!!",
    author: "Janine L.",
    role: "Event Host",
    image: "/images/hero.png",
  },
  {
    quote:
      "Michael was the bartender for our wedding reception. He was social, engaging and attentive to our guests. Everyone was complimentary of his services. I would recommend him to anyone.",
    author: "Yvonne S.",
    role: "Wedding Host",
    image: "/images/corporate.png",
  },
  {
    quote:
      "Michael did an amazing job at my wedding. He was extremely friendly with all my guests and most importantly, he was always on top of my (the bride) drink needs. He was a lifesaver!",
    author: "Alex V.",
    role: "Bride",
    image: "/images/wedding.png",
  },
  {
    quote:
      "Micheal was so easy to work with, he was very punctual, efficient and friendly. There was never a line waiting! He even stayed twice as long as agreed. Everyone loved him!",
    author: "Liana K.",
    role: "Wedding Reception",
    image: "/images/festival.png",
  },
  {
    quote:
      "Ecstatic Bartender! I was the DJ for Myxx Nightclub and I met him there bartending! Great Energy, upbeat guy, and even showed a new mixed drink 🍹! I would refer him to any gig on earth!",
    author: "Antwon S.",
    role: "DJ Intel",
    image: "/images/hero.png",
  },
  {
    quote:
      "Michael was a terrific bartender at our wedding. He arrived early and jumped right in. He took great care of everyone all night long and was on top of our champagne toast!",
    author: "Meaka B.",
    role: "Wedding Host",
    image: "/images/wedding.png",
  },
  {
    quote:
      "Michael was very responsive and helpful through every step of the planning process! He had such great energy, and was a delight to work with. Will definitely consider him for future events!",
    author: "Charlotte P.",
    role: "Event Planner",
    image: "/images/hero.png",
  },
  {
    quote:
      "Michael is a professional bartender. When he stepped up to the bar he knew exactly what to do—fast, elegant and perfect. Everybody in the party was very happy!",
    author: "Tania M.",
    role: "Birthday Party",
    image: "/images/hero.png",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  return (
    <section className="pt-32 pb-32 bg-brand-primary/[0.03] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4"
          >
            Testimonials
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-medium mb-32">
            Trusted by <span className="pill-highlight px-6">the best.</span>
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-16"
            >
              {/* Profile Image */}
              <div className="flex-1 w-full">
                <div className="relative h-90 md:h-135 rounded-3xl overflow-hidden shadow-2xl -rotate-2">
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].author}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Quote Card */}
              <div className="flex-[1.2] relative">
                <Quote className="w-20 h-20 text-brand-accent/20 absolute -top-10 -left-10" />
                <div className="relative z-10">
                  <h2 className="font-sans text-xl md:text-3xl font-bold mb-8 leading-relaxed">
                    "{testimonials[current].quote}"
                  </h2>
                  <div>
                    <h4 className="text-xl font-black text-brand-primary">
                      {testimonials[current].author}
                    </h4>
                    <p className="text-brand-primary/60 font-bold uppercase tracking-widest text-xs">
                      {testimonials[current].role}
                    </p>
                  </div>

                  <div className="mt-12 flex gap-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full card-yellow flex items-center justify-center"
                      >
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center md:justify-start gap-4 mt-12 md:mt-0 md:absolute md:bottom-0 md:right-0">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-full border-2 border-brand-primary/10 flex items-center justify-center hover:bg-brand-primary hover:text-brand-cream transition-all group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={next}
              className="w-14 h-14 rounded-full border-2 border-brand-primary/10 flex items-center justify-center hover:bg-brand-primary hover:text-brand-cream transition-all group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Link href="/testimonials">
            <button className="btn-outline px-12 py-4 text-xl">
              View All Testimonials
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
