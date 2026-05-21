type PrimaryButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export function PrimaryButton({ children, href, variant = "primary" }: PrimaryButtonProps) {
  const className =
    variant === "primary"
      ? "bg-foreground text-background hover:bg-foreground-muted"
      : "border border-border bg-background/50 text-foreground hover:bg-secondary";

  return (
    <a
      className={`${className} flex h-10 items-center justify-between gap-2 rounded-md px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring`}
      href={href}
    >
      <span>{children}</span>
      <span aria-hidden="true">↓</span>
    </a>
  );
}
