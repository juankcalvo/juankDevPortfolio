export function Footer() {
  return (
    <footer className="border-t border-border/30 px-6 py-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} juank
          <span className="text-accent">DEV</span>
        </p>
        <p className="font-mono text-[10px] text-muted/50">
          Next.js + Tailwind
        </p>
      </div>
    </footer>
  );
}
