"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Check } from "lucide-react";
import { Github, Linkedin } from "./social-icons";
import { Reveal } from "./reveal";

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

const fieldClass =
  "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-accent/60 focus:ring-2 focus:ring-accent/20";

export function Contact() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_4ijrm4d",
        "template_mz9sbc4",
        e.currentTarget,
        "yOZz6q297ok44qY1k",
      );

      setSent(true);

      setTimeout(() => setSent(false), 3500);

      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  }

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />

      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="flex flex-col gap-8">
          <Reveal className="flex flex-col gap-4">
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Contact
            </span>
            <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Let&apos;s build something Together.
            </h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              I'm currently looking for internship opportunities and exciting
              projects. Whether you have an opportunity, collaboration, or
              simply want to connect, feel free to reach out.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4">
            <a className="group flex items-centerrajashreenivasreddyedu@gmail.com gap-4 text-muted-foreground transition-colors hover:text-foreground">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary/50 text-accent">
                <Mail className="size-4" />
              </span>
              href="mailto:rajashreenivasreddyedu@gmail.com"
            </a>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary/50 text-accent">
                <MapPin className="size-4" />
              </span>
              Chennai, Tamil Nadu, India
            </div>
            <div className="mt-2 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary/40 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-foreground"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="glass flex flex-col gap-4 rounded-3xl p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="PAKALA RAJA SHREENIVAS REDDY"
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm text-muted-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="rajashreenivasreddyedu.com"
                  className={fieldClass}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="subject"
                className="text-sm text-muted-foreground"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                placeholder="Internship Opportunity"
                className={fieldClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className={`${fieldClass} resize-none`}
              />
            </div>
            <motion.button
              type="submit"
              whileTap={{ scale: 0.98 }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl accent-gradient px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              {sent ? (
                <>
                  <Check className="size-4" />
                  Message sent
                </>
              ) : (
                <>
                  <Send className="size-4" />
                  Send message
                </>
              )}
            </motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
