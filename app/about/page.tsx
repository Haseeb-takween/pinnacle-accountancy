"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { TeamCard } from "../components/TeamCard";
import { AccreditationBadge } from "../components/AccreditationBadge";
import { ConsultationDialog } from "../components/ConsultationDialog";
import { Button } from "@/components/ui/button";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const team = [
  {
    name: "Rachel Okafor",
    role: "Founder & Senior Accountant",
    bio: "ICAEW qualified with 18 years of practice experience. Rachel founded Pinnacle in 2008 with a belief that small businesses deserve the same quality of financial guidance as larger firms, at a price that makes sense. She specialises in small business accounting, tax planning, and supporting clients through periods of growth.",
    initials: "RO",
  },
  {
    name: "Tom Sinclair",
    role: "Tax Advisor",
    bio: "AAT qualified, Tom specialises in self-assessment, landlord tax, and capital gains. He has a particular interest in helping landlords understand their obligations and opportunities — from mortgage interest restrictions to furnished holiday letting rules. He works with over 60 individual tax clients each year.",
    initials: "TS",
  },
  {
    name: "Priya Nair",
    role: "Bookkeeping & Payroll Manager",
    bio: "Xero certified and QuickBooks ProAdvisor, Priya manages payroll and bookkeeping for over 40 clients. She joined Pinnacle in 2015 and has helped dozens of businesses move from spreadsheets to cloud accounting — often with same-day turnaround on payroll queries.",
    initials: "PN",
  },
];

export default function AboutPage() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-3 py-1 rounded text-sm z-50">Skip to content</a>

        {/* Page header */}
        <div id="main-content" className="bg-foreground text-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn}>
              <p className="text-accent text-sm uppercase tracking-widest mb-2">About us</p>
              <h1 className="text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>About Pinnacle Accountancy</h1>
              <p className="text-white/70 mt-3 max-w-xl">A London accountancy practice built on straightforward guidance and fixed, transparent fees.</p>
            </motion.div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Story */}
            <motion.div {...fadeIn} className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-foreground mb-5" style={{ fontFamily: "var(--font-display)" }}>Our story</h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Pinnacle Accountancy was founded in 2008 with a simple belief — that every small business and individual deserves straightforward, honest financial guidance without the jargon. Based in London, we have grown steadily by doing one thing well: making our clients&rsquo; financial lives simpler and more confident.
                </p>
                <p>
                  We started as a one-person practice and have grown through referrals — clients who trust us enough to recommend us to other business owners. That&rsquo;s still how most of our new clients find us, and we think that says something.
                </p>
                <p>
                  Our approach has always been the same: agree a fixed fee upfront, assign a named accountant to each client, and be proactive rather than just reactive. We don&rsquo;t just file your returns — we flag what&rsquo;s coming, what you can claim, and what you can do differently next year.
                </p>
              </div>

              {/* Accreditations */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Accreditations</h3>
                <div className="flex flex-wrap gap-3">
                  <AccreditationBadge label="ICAEW Member" sublabel="Institute of Chartered Accountants" />
                  <AccreditationBadge label="AAT Qualified" sublabel="Association of Accounting Technicians" />
                </div>
              </div>
            </motion.div>

            {/* Contact sidebar */}
            <motion.div {...fadeIn} transition={{ delay: 0.1, duration: 0.5 }}>
              <div className="bg-[#ECEEEA] border border-border rounded-[0.3125rem] p-5 sticky top-24">
                <h3 className="font-semibold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>Talk to the team</h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-5">
                  <p>📍 22 Cannon Street, London, EC4M 5XD</p>
                  <p>📞 <a href="tel:02071234567" className="text-foreground hover:text-primary">020 7123 4567</a></p>
                  <p>✉️ <a href="mailto:hello@pinnacleaccountancy.co.uk" className="text-foreground hover:text-primary">hello@pinnacleaccountancy.co.uk</a></p>
                  <p>🕐 Mon–Fri 9am–5:30pm</p>
                </div>
                <Button onClick={() => setDialogOpen(true)} className="w-full bg-primary hover:bg-[#0F4732] text-white text-sm">
                  Book a free consultation
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Team */}
          <motion.section {...fadeIn} className="mt-14">
            <h2 className="text-2xl font-semibold text-foreground mb-6" style={{ fontFamily: "var(--font-display)" }}>Meet the team</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <TeamCard key={member.name} {...member} />
              ))}
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
      <ConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
}
