"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { content } from "@/data/content";

export function Hero() {
    return (
        <section className="min-h-[85vh] flex items-center justify-center pt-24 relative overflow-hidden bg-transparent">
            {/* Colorful Blobs - Cutesy Theme */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-0 w-[500px] h-[500px] bg-secondary rounded-full blur-[80px] -z-10 opacity-70"
            />
            <motion.div
                animate={{ scale: [1.1, 1, 1.1], rotate: [0, -20, 20, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -z-10"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 text-center z-10 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-8 tracking-tighter text-foreground">
                        {content.profile.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                        {content.profile.headline}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="#projects"
                            className="group inline-flex items-center justify-center h-14 px-8 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-all text-lg"
                        >
                            Selected Work
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#about"
                            className="inline-flex items-center justify-center h-14 px-8 rounded-full border border-border bg-transparent hover:bg-secondary/50 font-medium transition-colors text-lg text-muted-foreground hover:text-foreground"
                        >
                            About Me
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
