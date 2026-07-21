interface Deadline {
  date: string;
  description: string;
}

const deadlines: Deadline[] = [
  { date: "31 January", description: "Self-assessment tax return online filing and payment deadline" },
  { date: "31 October", description: "Self-assessment paper filing deadline" },
  { date: "5 April", description: "End of the UK tax year" },
  { date: "6 April", description: "Start of the new UK tax year" },
  { date: "Quarterly", description: "VAT return deadlines vary by VAT period — contact us for yours" },
];

export function DeadlineList() {
  return (
    <div className="border border-border rounded-[0.3125rem] overflow-hidden">
      <div className="grid grid-cols-[auto_1fr] divide-y divide-border">
        {deadlines.map((d, i) => (
          <>
            <div key={`date-${i}`} className="px-4 py-3 bg-[#E4EEE8] border-r border-border font-semibold text-sm text-primary whitespace-nowrap" style={{ fontFamily: "var(--font-display)" }}>
              {d.date}
            </div>
            <div key={`desc-${i}`} className="px-4 py-3 text-sm text-foreground">
              {d.description}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
