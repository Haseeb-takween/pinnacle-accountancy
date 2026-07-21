"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "I'd been doing my own accounts for three years and making a mess of it. Rachel sorted everything out — filed two years of backdated returns, found expenses I hadn't claimed, and saved me more than her fee in the first year alone. Now I don't think about tax at all. That's worth a lot when you're running a café.",
    author: "Marcus Webb",
    role: "Owner, The Corner Brew Café, Hackney",
    initials: "MW",
  },
  {
    quote: "As a freelance designer working between two clients and a side business, my tax situation is a bit unusual. Tom explained exactly what I could and couldn't claim, set me up on Xero, and I know to the pound what I'll owe in January. No nasty surprises. I've recommended Pinnacle to three other freelancers already.",
    author: "Sasha Pemberton",
    role: "Freelance Graphic Designer",
    initials: "SP",
  },
  {
    quote: "I have two rental properties and I was nervous about making tax digital. Priya handled the whole transition, got me set up properly, and now my quarterly VAT and self-assessment are just handled. The fixed monthly fee means I always know what I'm paying — no unexpected invoices on top of everything else.",
    author: "Nadia Cousins",
    role: "Landlord, two properties in South London",
    initials: "NC",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 bg-[#ECEEEA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
            What clients say
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">Real stories from small businesses and individuals we work with.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface border border-border rounded-[0.3125rem] p-6 flex flex-col"
            >
              <p className="text-foreground text-sm leading-relaxed flex-1" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-sm bg-primary/10 flex items-center justify-center text-primary text-xs font-semibold shrink-0" style={{ fontFamily: "var(--font-display)" }}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
