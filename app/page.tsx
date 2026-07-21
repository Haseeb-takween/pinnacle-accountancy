"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ServiceCard } from "./components/ServiceCard";
import { StatCounter } from "./components/StatCounter";
import { Testimonials } from "./components/Testimonials";
import { ConsultationDialog } from "./components/ConsultationDialog";
import {
  FileText, Building2, Users, Receipt, BookOpen, Briefcase,
  CheckCircle2, UserCircle2, Laptop, Lightbulb, TrendingUp, Shield,
} from "lucide-react";

const services = [
  { icon: FileText, title: "Self-Assessment Tax Returns", teaser: "For sole traders, freelancers, and landlords — we handle the return from start to submission.", anchor: "#self-assessment" },
  { icon: Building2, title: "Business Accounting & Year-End Accounts", teaser: "Annual accounts, statutory filing, and Companies House submissions for limited companies.", anchor: "#business-accounting" },
  { icon: Users, title: "Payroll Services", teaser: "Monthly payroll, RTI submissions, payslips, P60s, and auto-enrolment pension management.", anchor: "#payroll" },
  { icon: Receipt, title: "VAT Returns & Registration", teaser: "VAT registration advice, quarterly returns, and Making Tax Digital compliance.", anchor: "#vat" },
  { icon: BookOpen, title: "Bookkeeping", teaser: "Monthly or quarterly bookkeeping, bank reconciliation, and Xero/QuickBooks setup.", anchor: "#bookkeeping" },
  { icon: Briefcase, title: "Company Formation & Secretarial Services", teaser: "Limited company formation, registered office, and confirmation statement filing.", anchor: "#company-formation" },
];

const clients = [
  { label: "Small businesses" },
  { label: "Sole traders" },
  { label: "Landlords" },
  { label: "Contractors" },
  { label: "Individuals" },
];

const benefits = [
  { icon: CheckCircle2, title: "Fixed fees, no surprises", desc: "Every service is quoted at a fixed fee agreed before we start. No hourly rates, no unexpected invoices." },
  { icon: UserCircle2, title: "Your dedicated accountant", desc: "Every client gets a named accountant who knows your situation — not a call centre or rotating team." },
  { icon: Laptop, title: "Cloud accounting ready", desc: "We work with Xero and QuickBooks and can set you up, train you, and take over day-to-day processing." },
  { icon: Lightbulb, title: "Proactive, not just reactive", desc: "We flag opportunities and issues before they arise — not just file your returns and wait for next year." },
];

const stats = [
  { value: 2008, suffix: "", prefix: "", label: "Year founded", decimals: 0 },
  { value: 40, suffix: "+", prefix: "", label: "Clients on payroll & bookkeeping", decimals: 0 },
  { value: 1, suffix: " day", prefix: "", label: "Target response time", decimals: 0 },
  { value: 18, suffix: " yrs", prefix: "", label: "Of combined practice experience", decimals: 0 },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
};

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        {/* Skip to content */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-3 py-1 rounded text-sm z-50">
          Skip to content
        </a>

        {/* Hero */}
        <section id="main-content" className="relative overflow-hidden bg-foreground text-white py-20 md:py-28">
          <div className="absolute inset-0 opacity-5 ledger-lines pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <p className="text-accent text-sm font-medium uppercase tracking-widest mb-4">
                ICAEW Member · AAT Qualified · Est. 2008
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Pinnacle<br />Accountancy
              </h1>
              <p className="text-2xl sm:text-3xl font-medium text-white/80 mb-6" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>
                Clear Numbers. Confident Decisions.
              </p>
              <p className="text-base text-white/70 mb-8 max-w-lg">
                Fixed-fee accountancy for small businesses, sole traders, landlords and contractors across the UK. No jargon, no surprise invoices — just straightforward financial guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => setDialogOpen(true)}
                  size="lg"
                  className="px-6"
                >
                  Book a free 30-minute consultation
                </Button>
                <Link
                  href="/services"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "border-white/30 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
                  )}
                >
                  View our services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Who we serve */}
        <section className="py-12 bg-[#ECEEEA] border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider text-center mb-6">Who we work with</p>
            <div className="flex flex-wrap justify-center gap-3">
              {clients.map((c) => (
                <span key={c.label} className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-[0.3125rem] text-sm font-medium text-foreground">
                  <TrendingUp className="w-3.5 h-3.5 text-primary" />
                  {c.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center mb-10">
              <h2 className="text-3xl font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                What we do
              </h2>
              <p className="text-muted-foreground mt-2 text-sm max-w-lg mx-auto">
                Six core services, each quoted at a fixed fee — no hourly rates.
              </p>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <motion.div
                  key={s.anchor}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  viewport={{ once: true }}
                >
                  <ServiceCard {...s} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose Pinnacle */}
        <section className="py-16 bg-foreground text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                Why choose Pinnacle
              </h2>
              <p className="text-white/60 mt-2 text-sm">What makes us different from a general practice.</p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-14 border-b border-white/10 pb-14">
              {stats.map((s) => (
                <StatCounter key={s.label} value={s.value} suffix={s.suffix} prefix={s.prefix} label={s.label} decimals={s.decimals} />
              ))}
            </div>

            {/* Benefits */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-sm bg-primary/30 flex items-center justify-center">
                    <b.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-sm" style={{ fontFamily: "var(--font-display)" }}>{b.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Final CTA */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className="flex flex-col items-center text-center"
              style={{ maxWidth: "36rem", marginLeft: "auto", marginRight: "auto" }}
            >
              <Shield className="mb-4 h-10 w-10 text-primary" aria-hidden="true" />
              <h2
                className="mb-3 text-3xl font-semibold text-foreground"
                style={{ fontFamily: "var(--font-display)", textAlign: "center", width: "100%" }}
              >
                Ready to simplify your finances?
              </h2>
              <p
                className="mb-6 text-sm text-muted-foreground"
                style={{ textAlign: "center", width: "100%", maxWidth: "28rem" }}
              >
                Book a free 30-minute consultation and find out how Pinnacle can help. No obligation, no sales pitch.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button onClick={() => setDialogOpen(true)} className="px-6">
                  Book a free consultation
                </Button>
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ variant: "outline" }), "px-6")}
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
}
