"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Github, Linkedin } from "./social-icons";

const socials = [
  {
    icon: Github,
    href: "https://github.com/RAJASHREENIVASREDDY",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/raja-shreenivas-reddy-472265304",
    label: "LinkedIn",
  },
];

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 accent-gradient opacity-[0.07] blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <a
            href="#top"
            className="flex items-center gap-2 font-mono text-sm font-semibold"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg accent-gradient text-primary-foreground">
              PR
            </span>

            <span className="text-foreground hidden sm:inline">
              Pakala Raja Shreenivas Reddy
            </span>
          </a>

          <nav className="flex flex-wrap gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3 }}
                aria-label={s.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-secondary/40 text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
              >
                <s.icon className="size-4" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} Pakala Raja Shreenivas Reddy. All
            rights reserved.
          </p>

          <a
            href="#top"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            Back to top
            <ArrowUp className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
