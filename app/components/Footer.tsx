import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const services = [
  { label: "Self-Assessment Tax Returns", anchor: "#self-assessment" },
  { label: "Business Accounting & Year-End Accounts", anchor: "#business-accounting" },
  { label: "Payroll Services", anchor: "#payroll" },
  { label: "VAT Returns & Registration", anchor: "#vat" },
  { label: "Bookkeeping", anchor: "#bookkeeping" },
  { label: "Company Formation & Secretarial Services", anchor: "#company-formation" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center text-white font-bold text-sm" style={{ fontFamily: "var(--font-display)" }}>P</span>
              <span className="font-semibold text-lg" style={{ fontFamily: "var(--font-display)" }}>Pinnacle Accountancy</span>
            </div>
            <p className="text-sm text-white/70 mb-4" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>
              Clear Numbers. Confident Decisions.
            </p>
            <div className="flex gap-2">
              <AccBadge label="ICAEW Member" />
              <AccBadge label="AAT Qualified" />
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/60 mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <a href="tel:02071234567" className="text-white/80 hover:text-white">020 7123 4567</a>
              </li>
              <li className="flex gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <a href="mailto:hello@pinnacleaccountancy.co.uk" className="text-white/80 hover:text-white">hello@pinnacleaccountancy.co.uk</a>
              </li>
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span className="text-white/80">22 Cannon Street, London, EC4M 5XD</span>
              </li>
              <li className="flex gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span className="text-white/80">Mon–Fri 9am–5:30pm</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/60 mb-3">Services</h3>
            <ul className="space-y-1.5 text-sm">
              {services.map((s) => (
                <li key={s.anchor}>
                  <Link href={`/services${s.anchor}`} className="text-white/80 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/60 mb-3">Firm</h3>
            <ul className="space-y-1.5 text-sm">
              <li><Link href="/about" className="text-white/80 hover:text-white">About Pinnacle</Link></li>
              <li><Link href="/resources" className="text-white/80 hover:text-white">Tax Resources</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white">Contact Us</Link></li>
            </ul>
            <div className="mt-4 text-xs text-white/50">
              <p>Founded 2008 · London</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Pinnacle Accountancy. All rights reserved.</p>
          <p>22 Cannon Street, London, EC4M 5XD · Registered in England</p>
        </div>
      </div>
    </footer>
  );
}

function AccBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2 py-1 text-xs font-medium border border-accent/40 text-accent rounded-sm">
      {label}
    </span>
  );
}
