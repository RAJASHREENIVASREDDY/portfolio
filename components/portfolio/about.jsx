"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Compass } from "lucide-react";
import { Reveal } from "./reveal";

const stats = [
  { value: "15+", label: "Projects Built" },
  { value: "3+", label: "Years Learning" },
  { value: "10+", label: "Technologies" },
  { value: "300+", label: "DSA Problems Planned" },
];

const focus = [
  {
    icon: Compass,
    title: "Current Focus",
    body: "Building scalable full-stack web applications using the MERN stack, designing secure REST APIs, and strengthening backend architecture.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    body: "B.Tech in Computer Science Engineering at Bharath Institute of Higher Education and Research, Chennai (2023–2027).",
  },
  {
    icon: Target,
    title: "Career Goal",
    body: "To become a Software Development Engineer by building production-ready applications, mastering Data Structures & Algorithms, and contributing to impactful products.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28"
    >
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="flex flex-col gap-8">
          <Reveal className="flex flex-col gap-4">
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              About
            </span>

            <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Passionate About Building Scalable Software.
            </h2>
          </Reveal>

          <Reveal
            delay={0.1}
            className="flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground"
          >
            <p>
              I'm Raja Shreenivas Reddy, a Computer Science Engineering student
              passionate about full-stack development and backend engineering. I
              enjoy transforming ideas into scalable web applications using
              React, Node.js, Express.js and MongoDB.
            </p>

            <p>
              Alongside building real-world projects, I continuously improve my
              Data Structures & Algorithms, backend development, REST API
              design, and software engineering skills to prepare for Software
              Development Engineer roles.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 divide-y divide-border overflow-hidden rounded-2xl border border-border sm:grid-cols-4 sm:divide-x sm:divide-y-0">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1 px-5 py-6">
                  <span className="text-3xl font-semibold tracking-tight text-foreground">
                    {s.value}
                  </span>

                  <span className="text-xs text-muted-foreground">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="relative flex flex-col gap-4">
          <div className="absolute bottom-4 left-6 top-4 w-px bg-linear-to-b from-primary/60 via-accent/40 to-transparent" />

          {focus.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex gap-5 rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-accent/40"
            >
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl accent-gradient text-primary-foreground">
                <f.icon className="size-5" />
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-medium text-foreground">
                  {f.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
