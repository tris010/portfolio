import { content } from "@/data/content";

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} {content.profile.name}. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center space-x-6">
                    {Object.entries(content.profile.socials).map(([platform, url]) => (
                        <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors capitalize text-sm font-medium"
                        >
                            {platform}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
