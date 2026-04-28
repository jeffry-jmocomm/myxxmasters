"use client";

import Link from "next/link";
import Image from "next/image";
import { Camera, Globe, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-brand-cream pt-32 pb-10 border-t border-brand-cream/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-8xl font-black mb-12 max-w-4xl mx-auto leading-tight">
            You dream it. <br />
            <span className="pill-highlight px-6 text-brand-primary italic">
              We'll pour it.
            </span>
          </h2>
          <Link href="/services#quote-form">
            <button className="btn-primary bg-brand-cream text-brand-primary px-12 py-5 text-xl">
              Let's build your bar →
            </button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-20 border-b border-brand-cream/10">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-4 group mb-10">
              <Image
                src="/images/logo light.png"
                alt="MYXX Masters Logo"
                width={80}
                height={80}
                className="h-20 w-auto object-contain"
              />
              <span className="text-4xl md:text-3xl font-black tracking-tighter text-brand-cream">
                MyxxMasters
              </span>
            </Link>
            <p className="text-brand-cream/60 text-lg font-medium leading-relaxed mb-8">
              Premium mobile bartending for Orlando's most elite events.
              Licensed, insured, and dedicated to the craft.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-black mb-6 uppercase tracking-widest text-xs opacity-60">
              Explore
            </h4>
            <ul className="space-y-4 text-lg font-bold">
              <li>
                <Link
                  href="/services"
                  className="hover:text-brand-accent transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-brand-accent transition-colors"
                >
                  Why Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="hover:text-brand-accent transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black mb-6 uppercase tracking-widest text-xs opacity-60">
              Connect
            </h4>
            <ul className="space-y-4 text-lg font-bold">
              <li>
                <a
                  href="mailto:hello@myxxmasters.com"
                  className="hover:text-brand-accent transition-colors"
                >
                  hello@myxxmasters.com
                </a>
              </li>
              <li>
                <span className="opacity-80">Orlando, Central Florida</span>
              </li>
              <li className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border-2 border-brand-cream/20 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all"
                >
                  <Camera className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border-2 border-brand-cream/20 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all"
                >
                  <Globe className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
          <p>© 2024 MYXX MASTERS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            <Link
              href="/privacy"
              className="hover:text-brand-accent transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-brand-accent transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
