import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  tone = "plain",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "plain" | "soft" | "mint";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-16 md:py-24",
        tone === "soft" && "surface-soft",
        tone === "mint" && "bg-secondary/50",
        className,
      )}
    >
      <div className="relative mx-auto max-w-6xl px-5">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  centered?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
      {eyebrow && (
        <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/70 px-3 py-1 text-xs font-semibold tracking-wide text-accent-foreground uppercase">
          <span aria-hidden className="size-2 rounded-full bg-primary" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl leading-tight font-semibold text-foreground md:text-4xl">{title}</h2>
      {lead && <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{lead}</p>}
    </div>
  );
}