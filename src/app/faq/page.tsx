"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle, Beer, CreditCard, ClipboardCheck } from "lucide-react";

const faqCategories = [
  {
    id: "general",
    title: "General Questions",
    icon: <HelpCircle className="w-6 h-6" />,
    questions: [
      {
        q: "What is your process for working with new customers?",
        a: "I start by understanding the type of event you're hosting and the guest count. I also like to discuss your budget—there's always room for negotiation! Once the logistics are set, we focus on making sure you and your guests enjoy the event!!",
      },
      {
        q: "How did you get started in bartending?",
        a: "I fell in love with bartending at an event in 2011. The bartenders were so energetic and clearly loved what they did—I wanted to bring that same passion and energy to my own work!!",
      },
      {
        q: "What advice do you have for someone hiring a bartender?",
        a: "Look for someone who truly loves what they do. That energy and passion always shows through in the quality of the work!!!",
      },
    ],
  },
  {
    id: "services",
    title: "Services & Staffing",
    icon: <ClipboardCheck className="w-6 h-6" />,
    questions: [
      {
        q: "What types of events do you work with?",
        a: "I've done it all—from weddings and corporate events to high-energy nightclubs, festivals, and relaxed backyard Bar-B-Ques. No event is too big or too small.",
      },
      {
        q: "What training and experience do you have?",
        a: "I have over 5 years of experience in professional bartending and I am certified in mixology by the 123 Bartending school. My staff is also fully trained and state-certified.",
      },
      {
        q: "Do you provide the portable bar?",
        a: "Yes, we have professional portable bars available for rent if your venue doesn't have a dedicated bar area. We can also work with your existing setup.",
      },
    ],
  },
  {
    id: "logistics",
    title: "Logistics & Alcohol",
    icon: <Beer className="w-6 h-6" />,
    questions: [
      {
        q: "Who provides the alcohol?",
        a: "Florida law typically requires the client to purchase the alcohol. However, we provide a detailed shopping list based on your guest count and menu to make the process effortless for you.",
      },
      {
        q: "Are you insured?",
        a: "Absolutely. We carry both General Liability and Liquor Liability insurance to ensure a safe and protected environment for your event.",
      },
      {
        q: "What is included in your standard service?",
        a: "Our standard service includes professional tools, setup and breakdown, ice management (if requested), and expert mixology. We can also provide mixers, garnishes, and glassware depending on your package.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing & Payments",
    icon: <CreditCard className="w-6 h-6" />,
    questions: [
      {
        q: "What should I know about your pricing?",
        a: "My standard pricing is $3 per person for up to 100 people with a tip jar. For events up to 100 people without a tip jar, pricing ranges up to $350. However, I am very negotiable and willing to work within reasonable budgets.",
      },
      {
        q: "Is a deposit required to lock in a date?",
        a: "Yes, we require a small deposit to secure your date in our calendar. This ensures we are dedicated to your event and can begin the planning process immediately.",
      },
    ],
  },
];

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar isDark />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-brand-primary text-brand-cream overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Frequently Asked <br />
              <span className="pill-highlight px-6 text-brand-primary italic">Questions.</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream/70 font-medium leading-relaxed">
              Everything you need to know about locking in the best mobile bar experience in Central Florida.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-12 border-b border-brand-primary/10 sticky top-[80px] bg-brand-cream/80 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto pb-4 md:pb-0 gap-4 no-scrollbar">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveTab(category.id);
                  setOpenIndex(0);
                }}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all whitespace-nowrap ${
                  activeTab === category.id
                    ? "bg-brand-primary text-brand-cream shadow-lg scale-105"
                    : "bg-brand-primary/5 text-brand-primary/60 hover:bg-brand-primary/10"
                }`}
              >
                {category.icon}
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          {faqCategories
            .find((cat) => cat.id === activeTab)
            ?.questions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[2rem] border border-brand-primary/5 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-8 text-left group"
                >
                  <span className="text-xl md:text-2xl font-black text-brand-primary group-hover:text-brand-accent transition-colors">
                    {item.q}
                  </span>
                  <div className={`p-2 rounded-full transition-all ${openIndex === index ? "bg-brand-primary text-brand-cream rotate-180" : "bg-brand-primary/5 text-brand-primary"}`}>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8">
                    <div className="h-[2px] w-12 bg-brand-accent mb-6" />
                    <p className="text-lg md:text-xl text-brand-primary/70 font-medium leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto bg-brand-teal text-brand-cream p-12 md:p-20 rounded-[4rem] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-brand-primary/10 pointer-events-none" />
          <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">
            Still have questions?
          </h2>
          <p className="text-xl md:text-2xl text-brand-cream/80 mb-12 max-w-2xl mx-auto relative z-10">
            We're here to help! Reach out and let's discuss how we can make your next event legendary.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center relative z-10">
            <a href="/#booking" className="btn-primary bg-brand-primary text-brand-cream border-brand-primary hover:bg-brand-cream hover:text-brand-primary px-12 py-5 text-xl">
              Get a Custom Quote
            </a>
            <a href="mailto:hello@myxxmasters.com" className="btn-outline border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-brand-primary px-12 py-5 text-xl">
              Email Us Directly
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
