import { CheckCircle2 } from "lucide-react";

export function FixedFeeNote() {
  return (
    <div className="my-8 flex items-start gap-3 p-4 border-l-4 border-primary bg-[#E4EEE8] rounded-r-[0.3125rem]">
      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
      <div>
        <p className="font-semibold text-foreground text-sm" style={{ fontFamily: "var(--font-display)" }}>Fixed fees. No surprises.</p>
        <p className="text-sm text-muted-foreground mt-0.5">All services are quoted at a fixed fee agreed upfront — no hourly rates, no surprise invoices.</p>
      </div>
    </div>
  );
}
