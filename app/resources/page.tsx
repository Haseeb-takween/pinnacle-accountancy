"use client";

import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { DeadlineList } from "../components/DeadlineList";
import { DisclaimerNote } from "../components/DisclaimerNote";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const expenses = [
  "Office costs — a proportion of household bills if working from home",
  "Travel expenses (not commuting — only travel for business purposes)",
  "Clothing — uniforms or protective gear only, not everyday work clothes",
  "Staff costs, including wages and subcontractor costs",
  "Marketing and advertising",
  "Professional fees, including accountancy fees",
  "Stock and materials used in the business",
];

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-3 py-1 rounded text-sm z-50">Skip to content</a>

        {/* Page header */}
        <div id="main-content" className="bg-foreground text-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn}>
              <p className="text-accent text-sm uppercase tracking-widest mb-2">Guidance</p>
              <h1 className="text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>Tax resources</h1>
              <p className="text-white/70 mt-3 max-w-xl">Plain-English guidance on key dates, allowable expenses, and business structures. For advice specific to your situation, please get in touch.</p>
            </motion.div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 space-y-14">
          {/* Key tax deadlines */}
          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-semibold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>Key tax deadlines</h2>
            <p className="text-sm text-muted-foreground mb-5">The dates every self-employed person and business owner should know.</p>
            <DeadlineList />
          </motion.section>

          {/* What expenses can sole traders claim */}
          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-semibold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>What expenses can sole traders claim?</h2>
            <p className="text-sm text-muted-foreground mb-5">
              HMRC allows sole traders to deduct allowable business expenses from their income before calculating the tax due. Common allowable expenses include:
            </p>
            <div className="border border-border rounded-[0.3125rem] overflow-hidden">
              <ul className="divide-y divide-border">
                {expenses.map((e, i) => (
                  <li key={i} className="flex items-start gap-3 px-4 py-3 text-sm">
                    <span className="text-primary shrink-0 mt-0.5 font-semibold">✓</span>
                    <span className="text-foreground">{e}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              This list is not exhaustive. What you can claim depends on your specific trade and circumstances — speak to us for advice tailored to your business.
            </p>
          </motion.section>

          {/* Sole trader vs limited company */}
          <motion.section {...fadeIn}>
            <h2 className="text-2xl font-semibold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>Sole trader vs limited company</h2>
            <p className="text-sm text-muted-foreground mb-5">One of the most common questions we get from growing businesses.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-surface border border-border rounded-[0.3125rem] p-5">
                <h3 className="font-semibold text-foreground mb-2 text-base" style={{ fontFamily: "var(--font-display)" }}>Sole trader</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  As a sole trader you are self-employed and personally responsible for your business debts. The structure is simple to set up and has fewer administrative requirements — you file a self-assessment tax return each year and pay Income Tax and National Insurance on your profits.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  This is often the right starting point and works well for many sole traders and freelancers throughout their careers.
                </p>
              </div>
              <div className="bg-surface border border-border rounded-[0.3125rem] p-5">
                <h3 className="font-semibold text-foreground mb-2 text-base" style={{ fontFamily: "var(--font-display)" }}>Limited company</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  As a limited company, the business is a separate legal entity, which limits your personal liability. Limited companies generally become more tax-efficient once profits exceed approximately £30,000–£40,000 per year, though the right structure depends on individual circumstances.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  There are more administrative requirements — annual accounts, corporation tax return, and confirmation statement — but these can all be handled by Pinnacle at a fixed fee.
                </p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-[#E4EEE8] border border-border rounded-[0.3125rem] text-sm text-muted-foreground">
              <strong className="text-foreground">Not sure which is right for you?</strong> The answer depends on your level of profits, your risk appetite, and your plans for the business. We offer a free 30-minute consultation to help you think it through.
            </div>
          </motion.section>

          <DisclaimerNote />
        </div>
      </main>
      <Footer />
    </>
  );
}
