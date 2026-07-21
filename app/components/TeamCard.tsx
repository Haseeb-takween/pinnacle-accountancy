interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export function TeamCard({ name, role, bio, initials }: TeamCardProps) {
  return (
    <div className="bg-surface border border-border rounded-[0.3125rem] p-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-sm bg-primary flex items-center justify-center text-white font-semibold text-sm shrink-0" style={{ fontFamily: "var(--font-display)" }}>
          {initials}
        </div>
        <div>
          <h3 className="font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>{name}</h3>
          <p className="text-sm text-accent font-medium">{role}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>
    </div>
  );
}
