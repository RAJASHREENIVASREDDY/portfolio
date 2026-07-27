"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { SectionHeading } from "./section-heading";

const certificates = [
  {
    title: "Data Science for Engineers",
    issuer: "NPTEL",
    year: "2025",
    link: "https://drive.google.com/file/d/18wubRBFvjgYvzXC6PxE9-I9cUwtdjuFG/view?usp=sharing",
  },
  {
    title: "Web Development Internship",
    issuer: "ApexPlanet Software Pvt. Ltd.",
    year: "2026",
    link: "https://drive.google.com/file/d/1slMhfTGcIqkS0wn9QGHU2Id-AKbEgklH/view?usp=sharing",
  },
];

export function Certificates() {
  return (
    <section
      id="certificates"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28"
    >
      <SectionHeading
        eyebrow="Certificates"
        title="Certifications & Learning"
        description="Professional certifications and learning achievements that reflect my continuous growth in software development and technology."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        {certificates.map((certificate, index) => (
          <motion.a
            key={certificate.title}
            href={certificate.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card/40 p-6 transition-all hover:-translate-y-1 hover:border-accent/40"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/60 text-accent transition-colors group-hover:accent-gradient group-hover:text-primary-foreground">
                <Award className="size-5" />
              </div>

              <div>
                <h3 className="font-medium text-foreground">
                  {certificate.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {certificate.issuer} • {certificate.year}
                </p>
              </div>
            </div>

            <span className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-accent">
              <ExternalLink className="size-4" />
              <span className="hidden sm:inline">View</span>
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
