import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { content } from "@/data/content";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export async function generateStaticParams() {
    return content.projects.map((project) => ({
        id: project.id,
    }));
}

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const project = content.projects.find((p) => p.id === id);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title} | Portfolio`,
        description: project.shortDescription,
    };
}

export default async function ProjectPage({ params }: Props) {
    const { id } = await params;
    const project = content.projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />
            <div className="pt-24 pb-12 bg-muted/20 flex-grow">
                <div className="container mx-auto px-6">
                    <Link
                        href="/#projects"
                        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Projects
                    </Link>

                    <div className="bg-card border rounded-2xl overflow-hidden shadow-sm">
                        <div className="w-full h-64 md:h-96 bg-muted relative">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="p-8 md:p-12">
                            <h1 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                                {project.title}
                            </h1>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 mb-10">
                                {project.link && project.link !== "#" && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                                    >
                                        Live Demo
                                        <ExternalLink className="ml-2 h-4 w-4" />
                                    </a>
                                )}
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 rounded-full border border-input bg-background hover:bg-muted font-medium transition-colors"
                                >
                                    <Github className="mr-2 h-4 w-4" />
                                    View Code
                                </a>
                            </div>

                            <div className="prose dark:prose-invert max-w-none">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                    <div>
                                        <h3 className="text-lg font-bold mb-2 text-primary">Role</h3>
                                        <p className="text-muted-foreground">{project.role}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-2 text-primary">Tech Stack</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map(tech => (
                                                <span key={tech} className="bg-muted px-2 py-1 rounded text-sm">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold mb-4">The Problem</h3>
                                    <p className="text-muted-foreground leading-relaxed text-lg">
                                        {project.problem}
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold mb-4">The Solution</h3>
                                    <p className="text-muted-foreground leading-relaxed text-lg">
                                        {project.solution}
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold mb-4">Impact & Metrics</h3>
                                    <p className="text-muted-foreground leading-relaxed text-lg border-l-4 border-primary pl-4">
                                        {project.metrics}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
