"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Send, Calendar, Users, MapPin } from "lucide-react";

const faqs = [
  {
    q: "What should I know about your pricing?",
    a: "My standard pricing is $3 per person for up to 100 people with a tip jar. For events up to 100 people without a tip jar, pricing ranges up to $350. However, I am very negotiable and willing to work within reasonable budgets.",
  },
  {
    q: "What is your process for working with new customers?",
    a: "I start by understanding the type of event you're hosting and the guest count. I also like to discuss your budget—there's always room for negotiation! Once the logistics are set, we focus on making sure you and your guests enjoy the event!!",
  },
  {
    q: "What training and experience do you have?",
    a: "I have over 5 years of experience in bartending and I am certified in mixology by the 123 Bartending school.",
  },
  {
    q: "How did you get started in bartending?",
    a: "I fell in love with bartending at an event in 2011. The bartenders were so energetic and clearly loved what they did—I wanted to bring that same passion and energy to my own work!!",
  },
  {
    q: "What types of customers have you worked with?",
    a: "I've done it all—from weddings and birthday parties to high-energy nightclubs and relaxed backyard Bar-B-Ques.",
  },
  {
    q: "What advice do you have for someone hiring a bartender?",
    a: "Look for someone who truly loves what they do. That energy and passion always shows through in the quality of the work!!!",
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
            
            <h2 className="text-4xl font-black mb-8 italic">Lock in your date.</h2>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs font-black uppercase tracking-widest opacity-60">Full Name</label>
                  <input type="text" className="w-full bg-brand-primary/5 border-2 border-transparent focus:border-brand-accent rounded-2xl p-4 font-bold outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-black uppercase tracking-widest opacity-60">Email Address</label>
                  <input type="email" className="w-full bg-brand-primary/5 border-2 border-transparent focus:border-brand-accent rounded-2xl p-4 font-bold outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs font-black uppercase tracking-widest opacity-60">Event Date</label>
                  <input type="date" className="w-full bg-brand-primary/5 border-2 border-transparent focus:border-brand-accent rounded-2xl p-4 font-bold outline-none transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-black uppercase tracking-widest opacity-60">Event Type</label>
                  <select className="w-full bg-brand-primary/5 border-2 border-transparent focus:border-brand-accent rounded-2xl p-4 font-bold outline-none transition-all appearance-none">
                    <option>Wedding</option>
                    <option>Corporate Event</option>
                    <option>Festival</option>
                    <option>Private Party</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-black uppercase tracking-widest opacity-60">Guest Count</label>
                <input type="number" className="w-full bg-brand-primary/5 border-2 border-transparent focus:border-brand-accent rounded-2xl p-4 font-bold outline-none transition-all" placeholder="150" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-black uppercase tracking-widest opacity-60">Message</label>
                <textarea rows={4} className="w-full bg-brand-primary/5 border-2 border-transparent focus:border-brand-accent rounded-2xl p-4 font-bold outline-none transition-all" placeholder="Tell us about your event..."></textarea>
              </div>

              <button type="submit" className="w-full btn-primary text-xl py-6 flex items-center justify-center gap-4 bg-brand-primary text-brand-cream border-brand-primary hover:bg-brand-accent hover:border-brand-accent hover:text-brand-primary">
                Request Custom Quote
                <Send className="w-6 h-6" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
