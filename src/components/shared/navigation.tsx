"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/content/navigation";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <a
            href="#"
            className="text-lg font-bold tracking-tight"
            aria-label="Go to top"
          >
            juank<span className="text-accent">DEV</span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-lg bg-accent px-4 py-1.5 text-sm font-semibold text-background transition-colors hover:bg-accent-light"
            >
              Contact
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="text-muted-foreground transition-colors hover:text-foreground md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-background/98 backdrop-blur-xl"
          >
            <div className="flex h-14 items-center justify-between px-6">
              <span className="text-lg font-bold tracking-tight">
                juank<span className="text-accent">DEV</span>
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-muted-foreground hover:text-foreground"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center gap-8 pt-16">
              {[...navItems, { label: "Contact", href: "#contact" }].map(
                (item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    className="text-2xl font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </motion.a>
                ),
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
