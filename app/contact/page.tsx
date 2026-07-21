"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const contactDetails = [
  { icon: Phone, label: "Phone", value: "020 7123 4567", href: "tel:02071234567" },
  { icon: Mail, label: "Email", value: "hello@pinnacleaccountancy.co.uk", href: "mailto:hello@pinnacleaccountancy.co.uk" },
  { icon: MapPin, label: "Address", value: "22 Cannon Street, London, EC4M 5XD", href: undefined },
  { icon: Clock, label: "Office hours", value: "Monday–Friday, 9am–5:30pm", href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-3 py-1 rounded text-sm z-50">Skip to content</a>

        {/* Page header */}
        <div id="main-content" className="bg-foreground text-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn}>
              <p className="text-accent text-sm uppercase tracking-widest mb-2">Get in touch</p>
              <h1 className="text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>Contact us</h1>
              <p className="text-white/70 mt-3 max-w-xl">We aim to respond to all enquiries within one business day. Fill in the form below or contact us directly.</p>
            </motion.div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div {...fadeIn} className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>Send an enquiry</h2>
              </div>
              <div className="bg-surface border border-border rounded-[0.3125rem] p-6 sm:p-8 shadow-sm">
                <p className="text-sm text-muted-foreground mb-6">
                  Fields marked <span className="text-primary font-medium">*</span> are required. Prefer to talk? Call us on{" "}
                  <a href="tel:02071234567" className="text-foreground font-medium hover:text-primary underline-offset-2 hover:underline">
                    020 7123 4567
                  </a>
                  .
                </p>
                <ContactForm />
              </div>
            </motion.div>

            {/* Contact info sidebar */}
            <motion.div {...fadeIn} transition={{ delay: 0.1, duration: 0.5 }}>
              <h2 className="text-xl font-semibold text-foreground mb-5" style={{ fontFamily: "var(--font-display)" }}>Contact details</h2>
              <div className="space-y-4">
                {contactDetails.map((d) => (
                  <div key={d.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-sm bg-[#E4EEE8] flex items-center justify-center shrink-0">
                      <d.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">{d.label}</p>
                      {d.href ? (
                        <a href={d.href} className="text-sm text-foreground hover:text-primary font-medium">{d.value}</a>
                      ) : (
                        <p className="text-sm text-foreground font-medium">{d.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-[#E4EEE8] border border-border rounded-[0.3125rem]">
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">Response time</p>
                <p className="text-sm text-muted-foreground">We aim to respond to all enquiries within one business day. For urgent matters, please call us directly.</p>
              </div>

              <div className="mt-4 flex gap-2">
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium border border-primary/30 text-primary rounded-sm bg-[#E4EEE8]">ICAEW Member</span>
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium border border-primary/30 text-primary rounded-sm bg-[#E4EEE8]">AAT Qualified</span>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
