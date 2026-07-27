"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { Github, Linkedin, Twitter } from "./social-icons";

const badges = [
  { label: "React", top: "12%", left: "4%", delay: 0 },
  { label: "Node.js", top: "68%", left: "2%", delay: 0.4 },
  { label: "MongoDB", top: "20%", right: "6%", delay: 0.2 },
  { label: "Express", top: "74%", right: "4%", delay: 0.6 },
  { label: "JavaScript", top: "44%", right: "-2%", delay: 0.8 },
];

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

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-36 sm:pt-44">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-130 w-130 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute right-[10%] top-[30%] h-95 w-95 rounded-full bg-purple/20 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col items-start">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 font-mono text-xs text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            🟢 Available for Software Engineering Internships
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">PAKALA RAJA SHREENIVAS REDDY</span>
            <span className="mt-3 block text-2xl font-normal text-muted-foreground sm:text-3xl">
              Full Stack Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I'm a Computer Science Engineering student passionate about building
            scalable full-stack web applications using the MERN stack. I enjoy
            developing secure backend systems, designing REST APIs, and creating
            modern, responsive user interfaces while continuously improving my
            problem-solving skills through Data Structures & Algorithms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-xl accent-gradient px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:glow-blue"
            >
              View Projects
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Download className="size-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-10 flex items-center gap-3"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-secondary/40 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-foreground"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Profile + floating badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 -z-10 rounded-4xl accent-gradient opacity-30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border">
            <Image
              src="profile.png"
              alt="Portrait of Raja Shreenivas Reddy"
              width={640}
              height={640}
              priority
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />
          </div>

          {badges.map((b) => (
            <motion.span
              key={b.label}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: b.delay,
                ease: "easeInOut",
              }}
              style={{ top: b.top, left: b.left, right: b.right }}
              className="glass absolute rounded-full px-3 py-1.5 font-mono text-xs text-foreground shadow-lg shadow-black/30"
            >
              {b.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
