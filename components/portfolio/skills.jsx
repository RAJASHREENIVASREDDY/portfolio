"use client";

import { motion } from "framer-motion";
import { Layout, Server, Database, Wrench } from "lucide-react";
import { SectionHeading } from "./section-heading";

const groups = [
  {
    icon: Layout,
    title: "Frontend",
    span: "lg:col-span-3",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    span: "lg:col-span-3",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Multer",
      "Cloudinary",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    span: "lg:col-span-2",
    skills: ["MongoDB", "MySQL", "Mongoose"],
  },
  {
    icon: Wrench,
    title: "Programming & Tools",
    span: "lg:col-span-4",
    skills: [
      "Java",
      "Python",
      "C",
      "C++",
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28"
    >
      <SectionHeading
        eyebrow="Skills"
        title="Technologies I Work With"
        description="A collection of technologies and tools I use to build responsive frontend applications, scalable backend services, and modern full-stack web solutions."
      />

      <div className="mt-14 grid gap-4 lg:grid-cols-6">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`group relative overflow-hidden rounded-3xl border border-border bg-card/40 p-7 transition-colors hover:border-accent/40 ${g.span}`}
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary/60 text-accent">
                <g.icon className="size-5" />
              </div>
              <h3 className="text-lg font-medium text-foreground">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-border bg-background/60 px-3 py-2 font-mono text-xs text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
