"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FloatingIcons from "./FloatingIcons";
import PartnersSlider from "./PartnersSlider";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <header className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex flex-col justify-between pb-12 md:pb-16 lg:pb-20">
      <FloatingIcons />
      <motion.div
        className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-12 md:pt-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <p className="text-sm font-semibold text-primary">
              Innovation at Scale
            </p>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div variants={itemVariants} className="mb-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Transform Your Vision Into
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
              Reality with Novalis AI
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.div variants={itemVariants} className="mb-12 max-w-2xl">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Enterprise solutions powered by cutting-edge AI, VR technology, and
            digital innovation to accelerate your business growth.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button
            asChild
            variant="default"
            className="px-8 heading-6 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            <Link href="/projects" className="flex items-center gap-2">
              View Projects
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="px-8 heading-6 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-semibold"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Book a Call
            </Link>
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-12"
        >
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">Trusted by 100+ Companies</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">24/7 Support</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Partners Slider */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10"
      >
        <PartnersSlider />
      </motion.div>
    </header>
  );
}
