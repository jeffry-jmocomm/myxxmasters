"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, Heart } from "lucide-react";

const testimonials = [
  {
    quote: "Michael was awesome, drinks were great! As the bride, he made sure my glass was always full. We couldn't have asked for a better bartender! From start to finish it was smooth sailing!",
    author: "Bianca M.",
    role: "Bride",
    image: "/images/wedding.png"
  },
  {
    quote: "Mike is absolutely awesome!!!! I wish he was the bartender at every bar in America!! I definitely, unequivocally recommend Mike for any and every event!! He's in the hall of fame in my book!",
    author: "Sterling R.",
    role: "Event Host",
    image: "/images/hero.png"
  },
  {
    quote: "Connected with Mike and he offered several different options for our celebration. He was responsive, offered a great deal and followed up several times. Hilda was also amazing!!!",
    author: "Janine L.",
    role: "Event Host",
    image: "/images/hero.png"
  },
  {
    quote: "Michael was the bartender for our wedding reception. He was social, engaging and attentive to our guests. Everyone was complimentary of his services. I would recommend him to anyone.",
    author: "Yvonne S.",
    role: "Wedding Host",
    image: "/images/corporate.png"
  },
  {
    quote: "Michael did an amazing job at my wedding. He was extremely friendly with all my guests and most importantly, he was always on top of my (the bride) drink needs. He was a lifesaver!",
    author: "Alex V.",
    role: "Bride",
    image: "/images/wedding.png"
  },
  {
    quote: "Micheal was so easy to work with, he was very punctual, efficient and friendly. There was never a line waiting! He even stayed twice as long as agreed. Everyone loved him!",
    author: "Liana K.",
    role: "Wedding Reception",
    image: "/images/festival.png"
  },
  {
    quote: "Ecstatic Bartender! I was the DJ for Myxx Nightclub and I met him there bartending! Great Energy, upbeat guy, and even showed a new mixed drink 🍹! I would refer him to any gig on earth!",
    author: "Antwon S.",
    role: "DJ Intel",
    image: "/images/hero.png"
  },
  {
    quote: "Michael was a terrific bartender at our wedding. He arrived early and jumped right in. He took great care of everyone all night long and was on top of our champagne toast!",
    author: "Meaka B.",
    role: "Wedding Host",
    image: "/images/wedding.png"
  },
  {
    quote: "Michael was very responsive and helpful through every step of the planning process! He had such great energy, and was a delight to work with. Will definitely consider him for future events!",
    author: "Charlotte P.",
    role: "Event Planner",
    image: "/images/hero.png"
  },
  {
    quote: "Michael is a professional bartender. When he stepped up to the bar he knew exactly what to do—fast, elegant and perfect. Everybody in the party was very happy!",
    author: "Tania M.",
    role: "Birthday Party",
    image: "/images/hero.png"
  }
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar isDark />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden bg-brand-primary text-brand-cream text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <span className="pill-highlight px-6 text-brand-primary mb-8 inline-block font-bold">
            Client Love
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight italic">
            Straight from <br />
            <span className="text-brand-accent">the bar.</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-cream/70 font-medium max-w-2xl mx-auto">
            We don't just pour drinks; we pour memories. See what our clients have to say about the MYXX Experience.
          </p>
        </motion.div>
        
        {/* Background Decorative Element */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-teal/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2" />
      </section>

      {/* Grid Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid bg-white rounded-[2.5rem] p-10 shadow-sm border border-brand-primary/5 hover:shadow-xl transition-all duration-500 group"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
              
              <Quote className="w-10 h-10 text-brand-accent/20 mb-4" />
              
              <p className="text-xl font-bold font-sans italic leading-relaxed text-brand-primary/90 mb-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-brand-primary/5 pt-8">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-black text-brand-primary leading-tight">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm font-bold uppercase tracking-widest text-brand-primary/40">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto bg-brand-primary text-brand-cream p-12 md:p-20 rounded-[4rem] text-center relative overflow-hidden shadow-2xl">
          <Heart className="w-20 h-20 text-brand-accent/20 absolute -top-4 -left-4 rotate-[-15deg]" />
          <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">
            Were you <span className="text-brand-accent italic">impressed?</span>
          </h2>
          <p className="text-xl md:text-2xl text-brand-cream/80 mb-12 max-w-2xl mx-auto relative z-10 font-medium">
            We'd love to hear about your experience. Your feedback helps us keep pouring excellence.
          </p>
          <div className="flex justify-center relative z-10">
            <a href="mailto:hello@myxxmasters.com?subject=Myxx Masters Review" className="btn-primary bg-brand-accent text-brand-primary border-brand-accent hover:bg-brand-cream hover:border-brand-cream px-12 py-5 text-xl">
              Send us your review via Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
