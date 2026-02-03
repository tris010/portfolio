"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { content } from "@/data/content";

export function About() {
    return (
        <section id="about" className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image/Decoration Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-full md:w-1/2 flex justify-center"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl transform rotate-6 opacity-20" />
                            <div className="absolute inset-0 bg-card border rounded-2xl flex items-center justify-center shadow-xl overflow-hidden">
                                <Image
                                    src="/profile.jpg"
                                    alt="About Me"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                            About Me
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>{content.profile.bio}</p>
                            <p>
                                As a developer, I believe in writing clean, maintainable code and designing interfaces that are intuitive and enjoyable to use.
                                I'm constantly learning new technologies and keeping up with the latest trends in web development.
                            </p>
                            <p>
                                When I'm not coding, you can find me exploring new coffee shops, reading tech blogs, or contributing to open-source projects.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
