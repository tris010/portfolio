"use client";

import { motion } from "framer-motion";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { content } from "@/data/content";

export function GithubSection() {
    return (
        <section className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-3xl font-bold font-heading mb-4 flex items-center justify-center gap-3">
                            <Github className="w-8 h-8 text-primary" />
                            Open Source Activity
                        </h2>
                        <p className="text-muted-foreground">
                            I love building in public. Check out my latest contributions and repositories on GitHub.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white/80 backdrop-blur-sm border border-white/60 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all flex items-center justify-center"
                        >
                            {/* Using github-readme-stats with a custom 'pink' theme look or light theme */}
                            {/* We use specific params to match the aesthetics: hide_border, etc. */}
                            <img
                                src="https://github-readme-stats.vercel.app/api?username=tris010&show_icons=true&hide_border=true&bg_color=00000000&text_color=333333&icon_color=d946ef&title_color=db2777&count_private=true"
                                alt="GitHub Stats"
                                className="w-full h-auto"
                            />
                        </motion.div>

                        {/* Top Langs Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white/80 backdrop-blur-sm border border-white/60 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all flex items-center justify-center"
                        >
                            <img
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=tris010&layout=compact&hide_border=true&bg_color=00000000&text_color=333333&title_color=db2777"
                                alt="Top Languages"
                                className="w-full h-auto"
                            />
                        </motion.div>
                    </div>

                    {/* Contribution Graph */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-white/80 backdrop-blur-sm border border-white/60 p-8 rounded-3xl shadow-sm flex flex-col items-center"
                    >
                        <h3 className="font-bold text-lg mb-6 self-start text-foreground/80">Contribution Graph</h3>
                        {/* ghchart with pink color (Hex for hot pink is roughly #db2777 from Tailwind) */}
                        <div className="w-full overflow-x-auto">
                            <img
                                src="https://ghchart.rshah.org/db2777/tris010"
                                alt="GitHub Contribution Graph"
                                className="w-full min-w-[600px]"
                            />
                        </div>

                        <div className="mt-8">
                            <a
                                href={content.profile.socials.github}
                                target="_blank"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
                            >
                                <Github size={18} />
                                Follow me @tris010
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
