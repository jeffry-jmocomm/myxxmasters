"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Send, Calendar, Users, MapPin } from "lucide-react";

const faqs = [
  {
    q: "Are your bartenders licensed?",
    a: "Yes, every bartender on our team is TIPS certified and state-licensed. We prioritize safety and professionalism at every event.",
  },
  {
    q: "Do you provide glassware and ice?",
    a: "We offer full-service packages that include premium glassware, crystal-clear ice, garnishes, and all necessary tools.",
  },
  {
    q: "What areas do you serve?",
    a: "We are based in Orlando and serve all of Central Florida, including Tampa, Daytona, and surrounding areas.",
  },
];

export default function Booking() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="booking" className="py-24 bg-brand-primary text-brand-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* FAQ */}
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
              Got <br /><span className="pill-highlight px-6 text-brand-primary">questions?</span>
            </h2>
            
            <div id="faq" className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-brand-cream/5 rounded-[2rem] p-8 border border-brand-cream/10">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between text-left focus:outline-none group"
                  >
                    <span className="text-xl font-bold">{faq.q}</span>
                    <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === index ? "auto" : 0, opacity: openFaq === index ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-6 text-brand-cream/70 text-lg font-medium leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-cream text-brand-primary p-12 rounded-[3rem] shadow-2xl relative"
          >
            <div className="absolute -top-6 -right-6 w-20 h-20 card-accent rounded-full flex items-center justify-center rotate-12 bg-brand-accent text-brand-primary shadow-lg">
              <Calendar className="w-10 h-10" />
            </div>
            
            <h2 className="text-4xl font-black mb-8 italic">Check Availability</h2>

            <form className="space-y-6">
              <div className="space-y-1">
                <label className="text-xs font-black uppercase tracking-widest opacity-60">Full Name</label>
                <input type="text" className="w-full bg-brand-primary/5 border-2 border-transparent focus:border-brand-accent rounded-2xl p-4 font-bold outline-none transition-all" placeholder="John Doe" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs font-black uppercase tracking-widest opacity-60">Event Date</label>
                  <div className="relative">
                    <input type="date" className="w-full bg-brand-primary/5 border-2 border-transparent focus:border-brand-accent rounded-2xl p-4 font-bold outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-black uppercase tracking-widest opacity-60">Guest Count</label>
                  <div className="relative">
                    <input type="number" className="w-full bg-brand-primary/5 border-2 border-transparent focus:border-brand-accent rounded-2xl p-4 font-bold outline-none transition-all" placeholder="150" />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-black uppercase tracking-widest opacity-60">Message</label>
                <textarea rows={4} className="w-full bg-brand-primary/5 border-2 border-transparent focus:border-brand-accent rounded-2xl p-4 font-bold outline-none transition-all" placeholder="Tell us about your event..."></textarea>
              </div>

              <button type="submit" className="w-full btn-primary py-5 text-xl flex items-center justify-center group">
                Send Inquiry
                <Send className="ml-2 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
