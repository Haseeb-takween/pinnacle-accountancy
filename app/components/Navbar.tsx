"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ConsultationDialog } from "./ConsultationDialog";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

function PinnacleLogo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3 group shrink-0">
      {/* Peak / triangle logomark — references "pinnacle" = summit */}
      <svg
        width="32"
        height="30"
        viewBox="0 0 32 30"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Outer peak outline */}
        <polyline
          points="16,2 30,27 2,27"
          stroke="#B8935A"
          strokeWidth="2.2"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
        />
        {/* Inner filled peak — offset to give depth */}
        <polygon
          points="16,10 23,25 9,25"
          fill="#B8935A"
          opacity="0.25"
        />
        {/* Thin horizontal rule at base — ledger line motif */}
        <line x1="2" y1="27" x2="30" y2="27" stroke="#B8935A" strokeWidth="2.2" strokeLinecap="round" />
      </svg>

      {/* Wordmark */}
      <div className="leading-none">
        <span
          className={cn(
            "block font-bold tracking-[0.12em] text-[0.95rem] uppercase",
            light ? "text-white" : "text-[#14231C]"
          )}
          style={{ fontFamily: "var(--font-display)" }}
        >
          Pinnacle
        </span>
        <span
          className={cn(
            "block text-[0.6rem] tracking-[0.22em] uppercase mt-0.5",
            light ? "text-white/50" : "text-[#5B6B62]"
          )}
        >
          Accountancy
        </span>
      </div>
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <>
      {/* Dark green header — immediately distinct from Servio's light teal nav */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#14231C]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <PinnacleLogo light />

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-[#B8935A]",
                    pathname === link.href
                      ? "text-[#B8935A]"
                      : "text-white/65"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              {/* Gold CTA — opposite of Servio's primary-coloured button */}
              <Button
                onClick={() => setDialogOpen(true)}
                className="bg-[#B8935A] hover:bg-[#A07D45] text-[#14231C] font-semibold text-sm px-4"
              >
                Book a free consultation
              </Button>
            </nav>

            {/* Mobile */}
            <div className="flex md:hidden items-center gap-2">
              <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger
                  render={
                    <button className="inline-flex items-center justify-center h-9 w-9 rounded text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Open menu</span>
                    </button>
                  }
                />
                <SheetContent side="right" className="w-72 bg-[#14231C] border-l border-white/10">
                  <div className="flex flex-col gap-6 pt-6">
                    <PinnacleLogo light />
                    <nav className="flex flex-col">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setSheetOpen(false)}
                          className={cn(
                            "text-base font-medium transition-colors py-3 border-b border-white/10 hover:text-[#B8935A]",
                            pathname === link.href ? "text-[#B8935A]" : "text-white/70"
                          )}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                    <Button
                      onClick={() => { setSheetOpen(false); setDialogOpen(true); }}
                      className="bg-[#B8935A] hover:bg-[#A07D45] text-[#14231C] font-semibold w-full"
                    >
                      Book a free consultation
                    </Button>
                    <div className="text-sm space-y-1">
                      <p className="font-medium text-white">020 7123 4567</p>
                      <p className="text-white/50">hello@pinnacleaccountancy.co.uk</p>
                      <p className="text-white/50">Mon–Fri 9am–5:30pm</p>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
      <ConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
}
