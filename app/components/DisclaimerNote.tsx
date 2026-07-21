import { AlertCircle } from "lucide-react";

export function DisclaimerNote() {
  return (
    <div className="mt-12 border border-border rounded-[0.3125rem] p-4 bg-[#ECEEEA]">
      <div className="flex gap-3 items-start">
        <AlertCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
        <p className="text-xs text-muted-foreground leading-relaxed">
          <strong className="text-foreground font-medium">Disclaimer:</strong> This information is for general guidance only and does not constitute financial or tax advice. Please contact us for advice specific to your situation.
        </p>
      </div>
    </div>
  );
}
