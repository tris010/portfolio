export const content = {
    profile: {
        name: "Avani Khemka",
        role: "Computer Science & AI Engineer",
        headline: "Building scalable intelligent systems and solving real-world engineering challenges.",
        bio: "I am a final-year Computer Science Engineering (AI) student focused on building production-ready systems, not just prototypes. With a strong foundation in Machine Learning, Data Science, and Embedded Systems, I thrive on solving complex problems—from automating recruitment workflows to optimizing sensor anomaly detection. I value clean architecture, impact-driven engineering, and continuous learning.",
        email: "mailto:avanikhemka23@gmail.com",
        location: "Jaipur, India",
        socials: {
            github: "https://github.com/tris010",
            linkedin: "https://linkedin.com/in/avanikhemka",
            email: "mailto:avanikhemka23@gmail.com",
            resume: "/resume"
        },
    },
    education: [
        {
            institution: "JECRC Foundation",
            degree: "B.Tech in Computer Science Engineering (AI)",
            period: "2022 – 2026",
            score: "8.94 CGPA",
        },
    ],
    experience: [
        {
            company: "Smart India Hackathon 2023 & 2024",
            role: "Team Lead & Lead Engineer",
            period: "2023 – 2024",
            description: "Led cross-functional teams in two consecutive national hackathons. Architected full-stack solutions for government problem statements (DRDO & Ministry of Tourism). Managed development sprints, code reviews, and final deployment.",
        },
        {
            company: "PwC Launchpad",
            role: "Technology Trainee",
            period: "Mar 2025 - Jun 2025",
            description: "Selected via competitive AI-proctored assessment. Gained deep exposure to Cybersecurity protocols, Enterprise AI integration, and Python automation. Completed specialized micro-certifications.",
        },
        {
            company: "Upflairs",
            role: "Embedded Systems Trainee",
            period: "Aug 2023",
            description: "Developed automated control systems using embedded C and Python. Bridged hardware-software interface for real-time sensor data processing.",
        },
    ],
    projects: [
        {
            id: "recruitment-automation",
            title: "Recruitment Automation System",
            shortDescription: "AI-powered resume parsing and ranking system for DRDO use case.",
            tags: ["Python", "NLP", "FastAPI", "Machine Learning"],
            link: "",
            github: "https://github.com/tris010/recruitment-system",
            image: "/projects/recruitment-new.png",
            role: "Lead ML Engineer",
            problem: "Recruiters spend 70% of their time manually screening thousands of resumes, leading to fatigue and bias.",
            solution: "Built an NLP pipeline to extract resume entities (skills, exp) and calculate contextual semantic similarity against job descriptions. Automated interview scheduling via Google Calendar API.",
            metrics: "Reduced screening time by ~80%. Achieved high accuracy in keyword matching for technical roles.",
            techStack: ["Python", "Spacy (NLP)", "TF-IDF", "FastAPI", "React"],
        },
        {
            id: "anomaly-detection",
            title: "Sensor Data Anomaly Detection",
            shortDescription: "Optimizing F1-score for fault detection in industrial sensor networks.",
            tags: ["Machine Learning", "Data Science", "Python"],
            link: "",
            github: "https://github.com/tris010",
            image: "/projects/ml-new.png",
            role: "Data Scientist",
            problem: "Detecting rare equipment failures in noisy sensor data is critical to prevent downtime but difficult due to class imbalance.",
            solution: "Engineered a hybrid ML approach using Isolation Forests and Autoencoders. Preprocessed high-dimensional time-series data to isolate signal noise.",
            metrics: "Achieved 92% F1-score on test dataset, significantly reducing false positives compared to baseline thresholding.",
            techStack: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
        },
        {
            id: "travel-platform",
            title: "Underrated Destinations Platform",
            shortDescription: "Award-winning travel discovery engine for SIH 2023.",
            tags: ["React", "Node.js", "System Design"],
            link: "/demo/travel-platform",
            github: "https://github.com/tris010",
            image: "/projects/travel-new.png",
            role: "Full Stack Lead",
            problem: "Tourists overcrowd popular spots while hidden gems remain economically stagnant due to lack of visibility.",
            solution: "Designed a recommendation engine that surfaces 'underrated' locations based on user preferences. Implemented secure booking flow and interactive maps.",
            metrics: "Top 50 finalist in HackQuest. Scaled architecture to handle concurrent user sessions during demo.",
            techStack: ["React", "Node.js", "Express", "MongoDB", "Google Maps API"],
        },
        {
            id: "job-tracker",
            title: "Job Application Tracker",
            shortDescription: "Persistent CLI & GUI tool for managing job applications locally.",
            tags: ["Python", "SQLite", "Automation"],
            link: "",
            github: "https://github.com/tris010/job-application-tracker",
            image: "/projects/tracker-mockup.png",
            role: "Solo Developer",
            problem: "Spreadsheets are tedious and manual for tracking hundreds of job applications.",
            solution: "Created a local database application with a GUI wrapper. Features include status updates (Applied, Interview, Offer). Features include adding jobs, viewing statuses, and simple management.",
            metrics: "Zero-latency local CRUD operations. Used personally to track 50+ applications efficiently.",
            techStack: ["Python", "Tkinter", "SQLite", "Pandas"],
        }
    ],
    skills: {
        languages: ["Python", "C++", "SQL", "JavaScript", "TypeScript"],
        ml_ai: ["Scikit-Learn", "Pandas", "NumPy", "NLP", "TensorFlow Basics"],
        tools: ["Git & GitHub", "VS Code", "ServiceNow", "Postman", "Linux"],
        domains: ["Data Science", "Embedded Systems", "Web Development", "System Design"],
    },
    certifications: [
        {
            name: "Certified Application Developer (CAD)",
            issuer: "ServiceNow",
            date: "2025",
        },
        {
            name: "Certified System Administrator (CSA)",
            issuer: "ServiceNow",
            date: "2025",
        },
        {
            name: "Embedded Systems Certification",
            issuer: "Upflairs",
            date: "2023",
        },
    ]
};

export type Content = typeof content;
