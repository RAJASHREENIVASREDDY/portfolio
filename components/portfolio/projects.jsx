"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Github } from "./social-icons";
import { SectionHeading } from "./section-heading";

const projects = [
  {
    title: "SkillSync",
    tag: "Frontend Web Application",
    description:
      "A responsive landing page built with React and Tailwind CSS, featuring modern UI components, responsive layouts, and a clean user experience.",
    image: "/project-skillsync.png",
    stack: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/RAJASHREENIVASREDDY",
    demo: "https://rajashreenivasreddy.github.io/SkillSync/",
  },
  {
    title: "Weather App",
    tag: "API Integration",
    description:
      "A responsive weather application that fetches real-time weather information using a weather API. Users can search cities to view current temperature, humidity, wind speed, and weather conditions.",
    image: "/project-weather.png",
    stack: ["React", "JavaScript", "Weather API"],
    github: "https://github.com/RAJASHREENIVASREDDY",
    demo: "https://rajashreenivasreddy.github.io/ClimaPro-Weather-App/",
  },
  {
    title: "QuizMaster",
    tag: "Interactive Quiz Platform",
    description:
      "An interactive quiz application featuring multiple-choice questions, real-time score tracking, instant feedback, and a responsive interface built with React and JavaScript.",
    image: "/project-quizmaster.png",
    stack: ["React", "JavaScript", "CSS"],
    github: "https://github.com/RAJASHREENIVASREDDY",
    demo: "https://rajashreenivasreddy.github.io/Quiz-App/",
  },
];

function ProjectRow({ project, index }) {
  const reversed = index % 2 === 1;
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`group relative ${reversed ? "lg:order-2" : ""}`}
      >
        <div className="absolute -inset-3 -z-10 rounded-4xl accent-gradient opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25" />
        <div className="relative overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/40 transition-transform duration-500 group-hover:-translate-y-1.5">
          <Image
            src={project.image}
            alt={`${project.title} interface`}
            width={900}
            height={600}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`flex flex-col items-start gap-5 ${reversed ? "lg:order-1" : ""}`}
      >
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          {String(index + 1).padStart(2, "0")} — {project.tag}
        </span>
        <h3 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h3>
        <p className="text-pretty leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="rounded-lg border border-border bg-secondary/40 px-3 py-1.5 font-mono text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-2 flex flex-wrap gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="group/btn inline-flex items-center gap-2 rounded-xl accent-gradient px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Live Demo
            <ArrowUpRight className="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <Github className="size-4" />
            Source
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="work"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28"
    >
      <SectionHeading
        eyebrow="Featured Work"
        title="Featured Projects"
        description="A selection of projects that demonstrate my skills in full-stack development, responsive UI design, backend development, and problem-solving."
      />
      <div className="mt-16 flex flex-col gap-24">
        {projects.map((p, i) => (
          <ProjectRow key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
