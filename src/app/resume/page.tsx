"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Download, Mail, Phone, MapPin, Github, Linkedin, Calendar, BadgeCheck } from "lucide-react";
import Link from "next/link";
import { content } from "@/data/content";

export default function ResumePage() {
    const { profile, education, experience, skills, certifications, projects } = content;

    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-primary/30">
            <Navbar />

            <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col items-center">

                <div className="w-full max-w-4xl mb-8 flex justify-between items-center print:hidden">
                    <Link href="/" className="flex items-center text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Portfolio
                    </Link>
                    <button
                        onClick={() => window.print()}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    >
                        <Download size={18} />
                        Download PDF
                    </button>
                </div>

                {/* Resume Paper - Print optimized */}
                <div className="w-full max-w-[210mm] bg-white text-black p-8 md:p-12 shadow-2xl overflow-hidden print:shadow-none print:w-full print:max-w-none print:p-0">

                    {/* Header */}
                    <header className="border-b-2 border-neutral-800 pb-6 mb-6">
                        <h1 className="text-4xl font-bold uppercase tracking-wide mb-2 text-neutral-900">{profile.name}</h1>
                        <div className="flex flex-wrap gap-4 text-sm text-neutral-600 font-medium">
                            <div className="flex items-center gap-1">
                                <Phone size={14} /> {profile.socials.phone}
                            </div>
                            <div className="flex items-center gap-1">
                                <Mail size={14} /> {profile.email}
                            </div>
                            <div className="flex items-center gap-1">
                                <Linkedin size={14} />
                                <a href={profile.socials.linkedin} target="_blank" className="text-blue-700 underline flex items-center gap-1">linkedin.com/in/avanikhemka</a>
                            </div>
                            <div className="flex items-center gap-1">
                                <Github size={14} />
                                <a href={profile.socials.github} target="_blank" className="text-blue-700 underline flex items-center gap-1">github.com/tris010</a>
                            </div>
                            <div className="flex items-center gap-1">
                                <MapPin size={14} /> {profile.location}
                            </div>
                        </div>
                    </header>

                    {/* Career Objective */}
                    <section className="mb-6">
                        <h2 className="text-lg font-bold uppercase border-b border-neutral-300 mb-3 pb-1">Career Objective</h2>
                        <p className="text-sm leading-relaxed text-neutral-800">
                            {profile.headline} {profile.bio}
                        </p>
                    </section>

                    {/* Education */}
                    <section className="mb-6">
                        <h2 className="text-lg font-bold uppercase border-b border-neutral-300 mb-3 pb-1">Education</h2>
                        <div className="space-y-3">
                            {education.map((edu, idx) => (
                                <div key={idx} className="flex justify-between items-start text-sm">
                                    <div>
                                        <h3 className="font-bold text-neutral-900">{edu.degree}</h3>
                                        <p className="text-neutral-700">{edu.institution}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold">{edu.period}</p>
                                        <p className="text-neutral-600">{edu.score}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Skills */}
                    <section className="mb-6">
                        <h2 className="text-lg font-bold uppercase border-b border-neutral-300 mb-3 pb-1">Skills</h2>
                        <div className="text-sm grid grid-cols-[140px_1fr] gap-y-2">
                            <span className="font-bold">Technical Skills:</span>
                            <span>{skills.technical.join(", ")}</span>

                            <span className="font-bold">Tools & Platforms:</span>
                            <span>{skills.tools.join(", ")}</span>

                            <span className="font-bold">Core Subjects:</span>
                            <span>{skills.core.join(", ")}</span>

                            <span className="font-bold">Soft Skills:</span>
                            <span>{skills.soft.join(", ")}</span>

                            <span className="font-bold">Languages:</span>
                            <span>{skills.languages.join(", ")}</span>
                        </div>
                    </section>

                    {/* Trainings & Experience */}
                    <section className="mb-6">
                        <h2 className="text-lg font-bold uppercase border-b border-neutral-300 mb-3 pb-1">Trainings & Experience</h2>
                        <div className="space-y-4">
                            {experience.map((exp, idx) => (
                                <div key={idx}>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h3 className="font-bold text-sm text-neutral-900">{exp.company}, {exp.role}</h3>
                                        <span className="text-sm font-semibold text-neutral-700">{exp.period}</span>
                                    </div>
                                    <p className="text-sm text-neutral-800 leading-relaxed pl-4 border-l-2 border-neutral-200">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Certifications */}
                    <section className="mb-6">
                        <h2 className="text-lg font-bold uppercase border-b border-neutral-300 mb-3 pb-1">Certifications</h2>
                        <ul className="text-sm space-y-1 list-disc list-inside text-neutral-800">
                            {certifications.map((cert) => (
                                <li key={cert.name}>
                                    <span className="font-semibold">{cert.name}</span> – {cert.issuer} <span className="text-neutral-500 float-right">{cert.date}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Projects */}
                    <section className="mb-0">
                        <h2 className="text-lg font-bold uppercase border-b border-neutral-300 mb-3 pb-1">Projects Undertaken</h2>
                        <div className="space-y-4">
                            {projects.map((proj) => (
                                <div key={proj.id} className="text-sm">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h3 className="font-bold text-neutral-900">{proj.title}</h3>
                                        {/* <span className="text-xs text-neutral-600">See Portfolio</span> */}
                                    </div>
                                    <ul className="list-disc list-inside space-y-1 text-neutral-800">
                                        <li><span className="font-semibold">Technologies Used:</span> {proj.techStack.slice(0, 5).join(", ")}.</li>
                                        <li>{proj.problem}</li>
                                        <li>{proj.solution}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
            <style jsx global>{`
           @media print {
              body * {
                visibility: hidden;
              }
              #resume-content, #resume-content * {
                visibility: visible;
              }
              header, footer, nav, button {
                display: none !important;
              }
              main {
                background: white;
                padding: 0;
                margin: 0;
              }
              .container {
                width: 100%;
                max-width: none;
                padding: 0;
                margin: 0;
              }
              .shadow-2xl {
                box-shadow: none !important;
              }
            }
        `}</style>
        </main>
    );
}
