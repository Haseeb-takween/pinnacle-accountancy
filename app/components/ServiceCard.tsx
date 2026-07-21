import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  teaser: string;
  anchor: string;
}

export function ServiceCard({ icon: Icon, title, teaser, anchor }: ServiceCardProps) {
  return (
    <Link
      href={`/services${anchor}`}
      className="group block p-5 bg-surface border border-border rounded-[0.3125rem] hover:border-primary/40 hover:shadow-sm transition-all"
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-sm bg-[#E4EEE8] flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-sm text-foreground mb-1" style={{ fontFamily: "var(--font-display)" }}>{title}</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">{teaser}</p>
        </div>
      </div>
      <div className="mt-3 text-xs font-medium text-primary group-hover:underline">
        Learn more →
      </div>
    </Link>
  );
}
