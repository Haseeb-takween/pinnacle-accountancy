"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FixedFeeNote } from "../components/FixedFeeNote";
import { ConsultationDialog } from "../components/ConsultationDialog";
import { Button } from "@/components/ui/button";
import {
  FileText, Building2, Users, Receipt, BookOpen, Briefcase,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const services = [
  {
    id: "self-assessment",
    icon: FileText,
    title: "Self-Assessment Tax Returns",
    enquiry: "Self-Assessment",
    body: [
      "Whether you're a sole trader, freelancer, landlord, or company director with income outside PAYE, we handle your self-assessment tax return from start to submission.",
      "We gather your income and expense figures, identify every allowable deduction you're entitled to claim — including home-working expenses, mileage, professional subscriptions, and more — and file directly with HMRC online.",
      "You'll know exactly what you owe before we submit, and we'll advise on how to plan ahead for the following year.",
    ],
    suitable: ["Sole traders and freelancers", "Landlords with rental income", "Company directors", "Employees with additional income sources", "Individuals with capital gains"],
  },
  {
    id: "business-accounting",
    icon: Building2,
    title: "Business Accounting & Year-End Accounts",
    enquiry: "Business Accounting",
    body: [
      "We prepare annual accounts for limited companies and partnerships, handling statutory filing and Companies House submissions so you stay compliant and in good standing.",
      "Year-end accounts include profit and loss statements, balance sheets, and all supporting schedules. We also prepare your corporation tax return (CT600) and file it with HMRC.",
      "We work from your bookkeeping records — Xero, QuickBooks, or a spreadsheet — and can take over your bookkeeping entirely if you'd rather not deal with the day-to-day numbers.",
    ],
    suitable: ["Limited companies", "Partnerships", "Directors who want everything handled"],
  },
  {
    id: "payroll",
    icon: Users,
    title: "Payroll Services",
    enquiry: "Payroll",
    body: [
      "We handle monthly payroll processing for businesses of all sizes, from a single director to a team of twenty. Each month we calculate gross pay, deductions, and net pay, submit RTI (Real Time Information) to HMRC, and issue payslips to your employees.",
      "At year end we produce P60s for every employee and P45s for leavers. We also manage auto-enrolment pension duties — setting up your scheme, assessing employees, and submitting pension contributions on your behalf.",
    ],
    suitable: ["Businesses with one or more employees", "Directors taking a salary through their limited company", "Growing teams who want payroll off their plate"],
  },
  {
    id: "vat",
    icon: Receipt,
    title: "VAT Returns & Registration",
    enquiry: "VAT",
    body: [
      "If your turnover exceeds the VAT registration threshold (currently £90,000) or you want to register voluntarily, we advise on the right VAT scheme for your business and handle the registration process.",
      "Each quarter (or month, depending on your scheme) we prepare and submit your VAT return through Making Tax Digital-compliant software. We reconcile your figures, check for common errors, and ensure your claim or payment is correct.",
      "We advise on the Flat Rate Scheme, Cash Accounting Scheme, and Annual Accounting Scheme where relevant.",
    ],
    suitable: ["Businesses approaching or above the VAT threshold", "Those considering voluntary VAT registration", "Businesses needing Making Tax Digital compliance"],
  },
  {
    id: "bookkeeping",
    icon: BookOpen,
    title: "Bookkeeping",
    enquiry: "Bookkeeping",
    body: [
      "Good bookkeeping is the foundation of every other financial decision. We offer monthly or quarterly bookkeeping services, handling bank reconciliation, invoice posting, expenses categorisation, and management accounts.",
      "We work primarily in Xero and QuickBooks and can set up your account from scratch, migrate you from spreadsheets, or take over from another provider. If you prefer to do some of the work yourself, we can review and reconcile monthly.",
      "Regular management accounts give you a clear view of profit, cash position, and performance — so you can make decisions with confidence rather than guesswork.",
    ],
    suitable: ["Businesses that want the numbers handled", "Those wanting to move to cloud accounting", "Clients wanting management accounts for growth decisions"],
  },
  {
    id: "company-formation",
    icon: Briefcase,
    title: "Company Formation & Secretarial Services",
    enquiry: "Company Formation",
    body: [
      "Thinking of going limited? We can form your limited company quickly and correctly — registering with Companies House, setting up the right share structure, and advising on the most tax-efficient way to run the company from day one.",
      "We offer a registered office address at our Cannon Street address for clients who don't want to use their home address for public filings.",
      "Ongoing secretarial services include confirmation statement filing, maintaining statutory registers, and advising on any changes that need to be notified to Companies House.",
    ],
    suitable: ["Sole traders considering incorporation", "New business owners starting out limited", "Directors who want ongoing secretarial compliance handled"],
  },
];

export default function ServicesPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [defaultEnquiry, setDefaultEnquiry] = useState<string | undefined>();

  function openDialog(enquiry?: string) {
    setDefaultEnquiry(enquiry);
    setDialogOpen(true);
  }

  return (
    <>
      <Navbar />
      <main>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-3 py-1 rounded text-sm z-50">Skip to content</a>

        {/* Page header */}
        <div id="main-content" className="bg-foreground text-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn}>
              <p className="text-accent text-sm uppercase tracking-widest mb-2">Our services</p>
              <h1 className="text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>What we offer</h1>
              <p className="text-white/70 mt-3 max-w-xl">Six core services, each quoted at a fixed fee before we begin — no hourly rates, no surprise invoices.</p>
            </motion.div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <FixedFeeNote />

          {/* Service sections */}
          <div className="space-y-16 mt-10">
            {services.map((s, i) => (
              <motion.section
                key={s.id}
                id={s.id}
                {...fadeIn}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className="scroll-mt-20"
              >
                <div className="border-t border-border pt-10">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-10 h-10 rounded-sm bg-[#E4EEE8] flex items-center justify-center shrink-0">
                      <s.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>{s.title}</h2>
                    </div>
                  </div>
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-3">
                      {s.body.map((p, pi) => (
                        <p key={pi} className="text-sm text-muted-foreground leading-relaxed">{p}</p>
                      ))}
                    </div>
                    <div>
                      <div className="bg-[#ECEEEA] rounded-[0.3125rem] p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Suitable for</p>
                        <ul className="space-y-1.5">
                          {s.suitable.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                              <span className="text-primary mt-0.5">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                        <Button
                          onClick={() => openDialog(s.enquiry)}
                          className="mt-4 w-full"
                        >
                          Enquire about this service
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 border-t border-border pt-12 text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-3" style={{ fontFamily: "var(--font-display)" }}>
              Not sure which service you need?
            </h2>
            <p className="text-muted-foreground text-sm mb-5 max-w-md mx-auto">
              Book a free 30-minute consultation and we&apos;ll advise on exactly what you need and what it will cost.
            </p>
            <Button onClick={() => openDialog()} className="px-8">
              Book a free consultation
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      <ConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} defaultEnquiry={defaultEnquiry} />
    </>
  );
}
