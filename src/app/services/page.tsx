"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle2,
  GlassWater,
  IceCream,
  ShieldCheck,
  Star,
  Zap,
  ArrowRight,
  Send,
} from "lucide-react";

const inclusions = [
  {
    icon: <GlassWater className="w-8 h-8" />,
    title: "Premium Glassware",
    description:
      "From crystal flutes to heavy-base tumblers, we bring the right glass for every pour.",
  },
  {
    icon: <IceCream className="w-8 h-8" />,
    title: "Crystal-Clear Ice",
    description:
      "Not just any ice. We use slow-frozen, dense ice for the perfect dilution and chill.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Full Coverage",
    description:
      "$2M General Liability and Liquor Liability insurance for absolute peace of mind.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Rapid Setup",
    description:
      "We arrive 90-120 minutes early to ensure everything is perfect before the first guest arrives.",
  },
];

const detailedServices = [
  {
    title: "The Signature Wedding",
    tagline: "Your Vision, Our Craft",
    image: "/images/wedding.png",
    description:
      "Your wedding bar should be as unique as your vows. We specialize in custom signature cocktails that reflect your personality and style.",
    features: [
      "Custom-designed menu boards",
      "Full bar setup and breakdown",
      "Champagne toast management",
      "Fruit and herb garnishes",
    ],
    color: "coral",
  },
  {
    title: "Corporate Excellence",
    tagline: "Professional. Scalable. Seamless.",
    image: "/images/corporate.png",
    description:
      "Impress your clients and reward your team. We handle the logistics of high-volume service with professional efficiency.",
    features: [
      "Expedited service for large crowds",
      "Branded cocktail options",
      "Invoicing and transparent pricing",
      "Diverse non-alcoholic options",
    ],
    color: "teal",
  },
  {
    title: "High-Volume Festivals",
    tagline: "Speed Meets Safety",
    image: "/images/festival.png",
    description:
      "When the line is long, every second counts. Our festival team is trained for rapid response while maintaining strict compliance.",
    features: [
      "Expert ID verification",
      "Waste management and recycling",
      "Scalable staffing",
      "Simple, high-margin drink programs",
    ],
    color: "yellow",
  },
];

export default function ServicesPage() {
  const scrollToForm = () => {
    const form = document.getElementById("quote-form");
    form?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-brand-cream text-brand-primary">
      <Navbar isDark />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden bg-brand-primary text-brand-cream text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <span className="pill-highlight px-6 text-brand-primary mb-8 inline-block font-bold">
            Our Services
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight italic">
            Elevate every <br />
            <span className="text-brand-yellow">single pour.</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-cream/70 font-medium max-w-2xl mx-auto">
            From intimate weddings to massive festivals, we bring the bar, the
            talent, and the peace of mind.
          </p>
        </motion.div>
      </section>

      {/* Main Services Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {detailedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={scrollToForm}
              >
                {/* Slanted Image Container */}
                <div
                  className={`relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-brand-primary/5 transition-all duration-500 group-hover:scale-[1.02] group-hover:rotate-0 ${index % 2 === 0 ? "rotate-2" : "-rotate-2"}`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Text Below */}
                <div className="mt-10">
                  <span className="text-brand-primary/40 font-black uppercase tracking-widest text-[10px] mb-2 block">
                    {service.tagline}
                  </span>
                  <h3 className="text-3xl font-black mb-4 leading-tight group-hover:text-brand-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-lg text-brand-primary/70 mb-8 font-medium leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 gap-2 mb-8">
                    {service.features.slice(0, 3).map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                        <span className="text-sm font-bold text-brand-primary/80">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-brand-primary font-black uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                    Inquire Now{" "}
                    <ArrowRight className="w-4 h-4 text-brand-accent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Capabilities Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto border-4 border-brand-primary rounded-[3rem] p-12 md:p-20 bg-brand-cream shadow-2xl relative overflow-hidden">
          <div className="grid lg:grid-cols-4 gap-12 relative z-10">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-black mb-6 italic leading-tight">
                Everything we <br />
                <span className="text-brand-accent">offer.</span>
              </h2>
              <p className="text-brand-primary/60 font-medium">
                From low-key backyard gatherings to formal corporate galas, we
                have the flexibility to match your vibe.
              </p>
            </div>

            <div className="lg:col-span-3 grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "Beverage Types",
                  items: [
                    "Beer",
                    "Wine",
                    "Liquor / Mixed Drinks",
                    "Non-Alcoholic Options",
                  ],
                },
                {
                  title: "Event Types",
                  items: [
                    "Weddings",
                    "Corporate",
                    "Holiday Parties",
                    "Fundraisers",
                    "Birthday Parties",
                    "Bachelor/ette",
                  ],
                },
                {
                  title: "Additional Supplies",
                  items: [
                    "Setup & Cleanup",
                    "Glassware",
                    "Disposable Cups",
                    "Ice & Coolers",
                  ],
                },
              ].map((group, i) => (
                <div key={i}>
                  <h4 className="text-xl font-black mb-6 uppercase tracking-widest text-brand-primary/40 text-xs">
                    {group.title}
                  </h4>
                  <ul className="space-y-4">
                    {group.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-3 font-bold text-brand-primary"
                      >
                        <CheckCircle2 className="w-5 h-5 text-brand-teal" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* Subtle background detail inside card */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>
      </section>

      {/* What's Included */}
      <section className="py-32 px-6 bg-brand-primary text-brand-cream overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
              Standard in <br />
              <span className="pill-highlight px-6 text-brand-primary italic">
                every package.
              </span>
            </h2>
            <p className="text-xl text-brand-cream/60 max-w-2xl mx-auto">
              We handle the logistics. You handle the memories. Every MYXX
              Masters package includes these essentials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {inclusions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-brand-cream/5 p-10 rounded-[3rem] border border-brand-cream/10 hover:bg-brand-cream/10 transition-colors"
              >
                <div className="text-brand-yellow mb-6">{item.icon}</div>
                <h4 className="text-2xl font-black mb-4">{item.title}</h4>
                <p className="text-brand-cream/60 font-medium leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background Decorative Element */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-teal/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2" />
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="pill-highlight px-6 text-brand-primary mb-6 inline-block font-bold">
              Get a Quote
            </span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 italic">
              Let's talk <span className="text-brand-accent">logistics.</span>
            </h2>
            <p className="text-xl text-brand-primary/60 font-medium">
              Tell us about your event, and we'll handle the rest.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-primary text-brand-cream p-8 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden"
          >
            <form className="grid md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest opacity-60">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-brand-cream/10 border-2 border-transparent focus:border-brand-accent rounded-2xl p-4 font-bold outline-none transition-all placeholder:text-brand-cream/30"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest opacity-60">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-brand-cream/10 border-2 border-transparent focus:border-brand-accent rounded-2xl p-4 font-bold outline-none transition-all placeholder:text-brand-cream/30"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest opacity-60">
                  Event Date
                </label>
                <input
                  type="date"
                  className="w-full bg-brand-cream/10 border-2 border-transparent focus:border-brand-accent rounded-2xl p-4 font-bold outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest opacity-60">
                  Event Type
                </label>
                <select className="w-full bg-brand-cream/10 border-2 border-transparent focus:border-brand-accent rounded-2xl p-4 font-bold outline-none transition-all appearance-none cursor-pointer">
                  <option className="bg-brand-primary">
                    Wedding Reception
                  </option>
                  <option className="bg-brand-primary">Corporate Event</option>
                  <option className="bg-brand-primary">Large Festival</option>
                  <option className="bg-brand-primary">
                    Other Celebration
                  </option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-black uppercase tracking-widest opacity-60">
                  How many guests?
                </label>
                <input
                  type="number"
                  className="w-full bg-brand-cream/10 border-2 border-transparent focus:border-brand-accent rounded-2xl p-4 font-bold outline-none transition-all placeholder:text-brand-cream/30"
                  placeholder="e.g. 150"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-black uppercase tracking-widest opacity-60">
                  Anything else we should know?
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-brand-cream/10 border-2 border-transparent focus:border-brand-accent rounded-2xl p-4 font-bold outline-none transition-all placeholder:text-brand-cream/30"
                  placeholder="Tell us about your vision..."
                />
              </div>
              <div className="md:col-span-2 pt-4">
                <button
                  type="submit"
                  className="w-full bg-brand-teal text-brand-primary font-black text-xl py-6 rounded-full flex items-center justify-center gap-4 border-2 border-brand-teal hover:bg-brand-cream hover:border-brand-cream transition-all shadow-xl"
                >
                  Request Your Custom Quote
                  <Send className="w-6 h-6" />
                </button>
              </div>
            </form>

            {/* Background Detail */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      {/* <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <Star className="w-16 h-16 text-brand-yellow mx-auto mb-8 animate-pulse" />
          <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
            Ready to build <br />
            <span className="pill-highlight px-6">your dream bar?</span>
          </h2>
          <p className="text-xl text-brand-primary/70 mb-12 font-medium leading-relaxed">
            Every event starts with a conversation. Let us know what you're
            dreaming up, and we'll help you pour it.
          </p>
          <button
            onClick={scrollToForm}
            className="btn-primary text-xl px-12 py-5"
          >
            Let's build your bar
          </button>
        </div>
      </section> */}

      <Footer />
    </main>
  );
}
