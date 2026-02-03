"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { content } from "@/data/content";
import { cn } from "@/lib/utils";

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A selection of projects that showcase my skills and passion for building.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {content.projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative rounded-3xl overflow-hidden bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
                        >
                            <Link href={`/projects/${project.id}`} className="block relative aspect-video overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-xs font-bold rounded-full bg-white text-primary shadow-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm line-clamp-2">
                                        {project.shortDescription}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
