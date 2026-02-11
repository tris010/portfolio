"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { content } from "@/data/content";

export function Experience() {
    return (
        <section id="experience" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Work Experience
                    </h2>
                    <p className="text-muted-foreground">
                        My professional journey and career highlights.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-12">
                    {content.experience.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 border-l-2 border-border last:border-0"
                        >
                            <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary ring-4 ring-background" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold">{item.role}</h3>
                                    <div className="flex items-center text-muted-foreground mt-1">
                                        <Briefcase className="w-4 h-4 mr-2" />
                                        <span>{item.company}</span>
                                    </div>
                                </div>
                                <div className="flex items-center text-sm text-muted-foreground mt-2 sm:mt-0 font-medium bg-muted px-3 py-1 rounded-full w-fit">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    {item.period}
                                </div>
                            </div>

                            <p className="text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
