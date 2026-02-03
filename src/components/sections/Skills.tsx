"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";

export function Skills() {
    const categories = Object.keys(content.skills) as Array<keyof typeof content.skills>;

    return (
        <section id="skills" className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Skills & Certifications
                    </h2>
                    <p className="text-muted-foreground">
                        A comprehensive overview of my technical expertise and qualifications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Skills Column */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
                        {categories.map((category, index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-card border rounded-xl p-6 shadow-sm"
                            >
                                <h4 className="text-lg font-semibold mb-4 capitalize">{category}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {content.skills[category].map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Certifications & Education Column */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold mb-6">Certifications & Education</h3>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-card border rounded-xl p-6 shadow-sm"
                        >
                            <h4 className="text-lg font-semibold mb-4 text-primary">Certifications</h4>
                            <ul className="space-y-4">
                                {content.certifications.map((cert) => (
                                    <li key={cert.name} className="flex justify-between items-start border-b last:border-0 pb-2 last:pb-0">
                                        <div>
                                            <p className="font-medium">{cert.name}</p>
                                            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                                        </div>
                                        <span className="text-xs font-mono bg-muted px-2 py-1 rounded">{cert.date}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-card border rounded-xl p-6 shadow-sm"
                        >
                            <h4 className="text-lg font-semibold mb-4 text-primary">Education</h4>
                            <ul className="space-y-4">
                                {content.education.map((edu) => (
                                    <li key={edu.institution} className="flex flex-col gap-1 border-b last:border-0 pb-2 last:pb-0">
                                        <div className="flex justify-between">
                                            <p className="font-medium">{edu.degree}</p>
                                            <span className="text-sm text-muted-foreground">{edu.period}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">{edu.institution}</span>
                                            <span className="font-semibold text-primary">{edu.score}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
