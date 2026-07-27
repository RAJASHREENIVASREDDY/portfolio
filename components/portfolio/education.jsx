"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import { SectionHeading } from "./section-heading";

const education = [
  {
    icon: GraduationCap,
    degree: "Bachelor of Technology (B.Tech) in Computer Science Engineering",
    school:
      "Bharath Institute of Higher Education and Research (BIHER), Chennai",
    period: "2023 — 2027",
    detail:
      "Currently pursuing a Bachelor's degree in Computer Science Engineering with a strong focus on Full-Stack Development, Data Structures & Algorithms, Database Management Systems, and Software Engineering.",
  },
  {
    icon: BookOpen,
    degree: "Professional Learning & Certifications",
    school: "Online Learning Platforms",
    period: "2024 — Present",
    detail:
      "Continuously learning Full-Stack Web Development, MongoDB, React, Node.js, Express.js, Git, GitHub, REST APIs, and Data Structures & Algorithms through hands-on projects and online courses.",
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28"
    >
      <SectionHeading eyebrow="Education" title="Education" align="center" />
      <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
        {education.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-border bg-card/40 p-8 transition-colors hover:border-accent/40"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="flex h-12 w-12 items-center justify-center rounded-xl accent-gradient text-primary-foreground">
              <e.icon className="size-5" />
            </div>
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-medium text-foreground">
                {e.degree}
              </h3>
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              {e.school} · {e.period}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {e.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
