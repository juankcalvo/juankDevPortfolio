"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { profile } from "@/content/profile";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="px-6 pb-16 pt-28 md:pb-20 md:pt-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="flex flex-col items-center gap-8 text-center md:flex-row md:gap-14 md:text-left"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Photo */}
          <motion.div variants={item} className="shrink-0">
            <div className="relative">
              <Image
                src="/juankDev.JPEG"
                alt={profile.name}
                width={192}
                height={192}
                className="h-40 w-40 rounded-2xl object-cover shadow-2xl shadow-black/40 md:h-48 md:w-48"
                priority
              />
              {profile.available && (
                <div className="absolute -bottom-1.5 -right-1.5 flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-accent">
                  <span className="h-2.5 w-2.5 rounded-full bg-white" />
                </div>
              )}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={container} className="min-w-0">
            <motion.p
              variants={item}
              className="mb-2 font-mono text-sm text-accent"
            >
              juankDEV
            </motion.p>

            <motion.h1
              variants={item}
              className="mb-1.5 text-3xl font-bold tracking-tight md:text-4xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              variants={item}
              className="mb-4 text-lg font-medium text-accent"
            >
              {profile.title}
            </motion.p>

            <motion.p
              variants={item}
              className="mb-6 max-w-lg text-base leading-relaxed text-muted-foreground"
            >
              {profile.subheadline}
            </motion.p>

            <motion.div
              variants={item}
              className="mb-6 flex flex-col items-center gap-3 sm:flex-row md:items-start"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-accent-light"
              >
                View My Work
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted md:justify-start"
            >
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {profile.location}
              </span>
              <span className="text-border">|</span>
              <span className="text-accent">Available for projects</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
