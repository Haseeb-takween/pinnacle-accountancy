import { ShieldCheck } from "lucide-react";

interface AccreditationBadgeProps {
  label: string;
  sublabel?: string;
}

export function AccreditationBadge({ label, sublabel }: AccreditationBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-2 border border-primary/30 rounded-[0.3125rem] bg-[#E4EEE8]">
      <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
      <div>
        <p className="text-xs font-semibold text-primary leading-tight">{label}</p>
        {sublabel && <p className="text-xs text-muted-foreground">{sublabel}</p>}
      </div>
    </div>
  );
}
