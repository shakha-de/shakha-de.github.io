import {
    mnistDiagram,
    simityDiagram,
    foliaDiagram,
    gitStatsDiagram,
    avpDiagram,
    sifrDiagram,
    text2sqlDiagram
} from "./diagrams";

export const portfolioData = {
    personalInfo: {
        name: "Shakhriyor Kadamboev",
        title: "Engineering Reliable Systems",
        location: "Halle, Germany",
        email: "kadamboev.sh@gmail.com",
        github: "https://github.com/shakha-de",
        linkedin: "https://linkedin.com/in/shakhade",
        languages: [
            { language: "Russian", proficiency: "Native" },
            { language: "Uzbek", proficiency: "Native" },
            { language: "German", proficiency: "C2" },
            { language: "English", proficiency: "C1" },
            { language: "Turkish", proficiency: "A2" },
        ],
    },
    hero: {
        headline: "Engineering Reliable Systems",
        subheadline: "B.Sc. Computer Science Graduate (MLU Halle) | Backend & Cloud Engineer. Building scalable microservices and intelligent systems.",
        status: "AI & Cloud Intern @ Porsche AG · Stuttgart / Halle",
    },
    about: {
        headline: "Engineering with Precision & Purpose",
        paragraphs: [
            "I am a computer science graduate (B.Sc., MLU Halle) based in Germany, with a strong focus on backend development, microservices, and cloud-native systems. I enjoy working close to production: designing APIs, containerizing services, and thinking about performance, reliability, and clean architecture.",
            "Beyond university, I continuously explore topics like microservices architecture, system design, and infrastructure-as-code, and I am particularly interested in applying these skills in the automotive and embedded domains. I have already gained practical experience as a working student and through close contact with industry.",
            "Outside of software, I enjoy DIY electronics and motor-based projects, which keeps me connected to how software interacts with real hardware. I am comfortable working in multilingual environments (German, Russian, Uzbek, English) and I value clear communication, ownership, and long-term maintainability in every project I work on.",
        ],
        highlights: [
            { icon: "bolt", title: "Efficiency", description: "Minimalist and high-performance backend architectures." },
            { icon: "security", title: "Reliability", description: "Secure systems with role-based access and robust automation." },
            { icon: "analytics", title: "Data-Driven", description: "Predictive modeling and intelligent data pipelines." },
        ],
        stats: [
            { label: "Coding Exp", value: "3+ Yrs" },
            { label: "Projects", value: "5+" },
        ],
    },
    education: [
        {
            degree: "B.Sc. in Computer Science",
            institution: "Martin-Luther-University Halle-Wittenberg",
            period: "2023 – 2026",
            grade: "Bachelor Thesis Defense: 1.0 (Sehr Gut)",
            coursework: ["Data Structures & Algorithms", "OOP", "Design", "Computer Organization", "Data Science", "ML", "AI", "Image Processing"],
        },
    ],
    experience: [
        {
            role: "AI & Cloud Engineer Intern",
            company: "Porsche AG",
            location: "Stuttgart-Zuffenhausen, Germany",
            period: "Sep 2026 – Present",
            description: "Engineering cloud-native backend services and intelligent agent workflows using Kotlin, Spring Boot, AWS, and Azure. Building modular tools and AI agent architectures with Strands Kit to power scalable, automated cloud operations.",
        },
        {
            role: "Backend Software Developer Intern",
            company: "]init[ AG",
            location: "Halle (Saale), Germany",
            period: "Apr 2025 – Mar 2026",
            description: "Built a secure, scalable backend using Spring Boot + Spring Security with role-based access control. Implemented CI/CD test automation (JUnit, Pact, Bruno, K6).",
        },
        {
            role: "Student Teaching Assistant – Data Science",
            company: "Martin-Luther-University Halle-Wittenberg",
            location: "Halle (Saale), Germany",
            period: "Oct 2025 – Feb 2026",
            description: "Graded assignments for 100+ students using Python and Jupyter Notebooks; integrated with Stud.IP LMS. Automated repetitive grading tasks and refined assignment instructions to reduce confusion.",
        },
        {
            role: "Porsche Talent Day Digitalisierung & KI - Participant",
            company: "Porsche AG",
            location: "Zuffenhausen, Germany",
            period: "Nov. 21, 2025",
            description: "Selected participant for the exclusive talent networking event. Engaged in workshops focused on automotive software innovation. Won the coding challenge.",
            award: "Won the coding challenge.",
        },
        {
            role: "Student Assistant – Data Analysis",
            company: "Innovative Water and Environmental Solutions (IWES) UG",
            location: "Berlin, Germany",
            period: "Mar 2023 – Jun 2023",
            description: "Developed predictive models in Python for flood/drought forecasting using climatic datasets. Automated data preprocessing pipelines resulting in a 30% reduction in manual workload; collaborated on visualizations with Pandas, Matplotlib, and Seaborn.",
        },
    ],
    skills: {
        backend: ["Java", "Kotlin", "Spring Boot", "Spring Security", "JPA/Hibernate", "Python", "PostgreSQL", "SQLite"],
        infrastructure: ["AWS", "Azure", "Docker", "CI/CD", "Linux", "Bash"],
        tools: ["Git", "VS Code", "Intellij", "Jupyter Notebooks", "Bruno", "K6", "Postman"],
        frontend: ["React.js", "JavaScript", "HTML", "CSS", "Streamlit"],
        data_science: ["Pandas", "Matplotlib", "Seaborn", "Hugging Face"],
        systems: ["Python", "C"],
        all: ["Java", "Kotlin", "Python", "C", "JavaScript", "SQL", "Spring Boot", "Spring Security", "JPA/Hibernate", "React.js", "TensorFlow (Java)", "Kafka", "AWS", "Azure", "Docker", "Linux", "Pandas", "Matplotlib", "Seaborn", "Hugging Face", "Streamlit", "SQLite"],
    },
    projects: [
        {
            title: "Text2SQL LLM — Reinforcement Learning via GRPO",
            slug: "text2sql-llm",
            description: "Reinforcement Learning framework for Text-to-SQL using GRPO with execution feedback. Achieved 59.59% EX on the official BIRD test benchmark with a compact 0.8B model, yielding ~9–10x higher parameter efficiency.",
            github: null,
            live: "https://bird-bench.github.io/#:~:text=Jul%2017%2C%202026,59.59",
            content: {
                overview: "For my bachelor thesis, I designed and evaluated an end-to-end Reinforcement Learning framework using Group Relative Policy Optimization (GRPO) to train compact Large Language Models directly on real database execution feedback rather than standard token imitation. By moving beyond the limitations of Supervised Fine-Tuning (SFT)—such as schema copy-bias, hallucinations, and syntax errors on unseen databases—this approach achieved competitive state-of-the-art results on BIRD and SPIDER benchmarks with extreme parameter efficiency.",
                techStack: ["Python", "PyTorch", "GRPO", "Hugging Face", "Qwen", "Unsloth", "Axolotl", "SQLite", "sqlglot", "SLURM", "Typst"],
                challenges: "Overcoming SFT token-imitation limitations (copy-bias and execution failures on unseen schemas), systematically identifying and eliminating reward hacking across 18 reward architectures, and maximizing sub-billion model performance without massive computational resources.",
                outcomes: [
                    "59.59% Execution Accuracy on the official BIRD Test Set using Qwen3.5-0.8B (FFT + GRPO + Majority Voting)",
                    "~9–10x higher parameter efficiency (accuracy per parameter) compared to 9B-parameter models",
                    "+5.61 percentage point improvement over SFT baselines on BIRD Dev and consistent gains on SPIDER Dev",
                    "Demonstrated strong Out-of-Distribution (OOD) generalization: Spider-DK (+4.67 PP), EHRSQL (+5.55 PP), and Spider-Realistic",
                    "Systematic iteration across 18 reward architectures over 4 generations, proving the superiority of Gen 4 strict binary database feedback over noisy lexical n-grams",
                    "Official submission and verified ranking on the BIRD Benchmark Leaderboard",
                    "Bachelor Thesis Defense evaluated with grade 1.0 (Sehr Gut)",
                ],
                metrics: [
                    { label: "BIRD Test Set (0.8B)", value: "59.59% EX" },
                    { label: "BIRD Dev Gain (GRPO)", value: "+5.61 PP" },
                    { label: "OOD Gain (EHRSQL)", value: "+5.55 PP" },
                    { label: "Parameter Efficiency", value: "~10x vs 9B" },
                    { label: "Reward Architectures", value: "18 (4 Gens)" },
                    { label: "Defense Grade", value: "1.0 (Sehr Gut)" }
                ],
                sections: [
                    {
                        title: "1. Problem Statement & Motivation (introduction.typ)",
                        description: "Supervised Fine-Tuning (SFT) trains language models on pure token imitation rather than database executability. When presented with unseen database schemas, SFT models suffer from copy-bias, hallucinations, and syntactic/semantic execution failures. The goal of this thesis was to conceptualize and evaluate a Reinforcement Learning framework with GRPO (Group Relative Policy Optimization) to train models directly via actual database execution feedback."
                    },
                    {
                        title: "2. Data & Training Pipeline (data_engineering.typ, sft_training.typ)",
                        description: "Constructed an end-to-end data curation, synthetic reasoning, and training pipeline:",
                        items: [
                            "Curation & Classification: Aggressive filtering and rule-based complexity classification of training data from SPIDER and BIRD.",
                            "Synthetic Reasoning: Generated high-quality Chain-of-Thought (CoT) reasoning traces using the teacher model GLM-5.1, validated against SQLite schemas with sqlglot.",
                            "SFT Baselines: Established cold-start baseline policies via Supervised Fine-Tuning using LoRA/QLoRA and Full Fine-Tuning (FFT) across Qwen architectures (Qwen3.5-9B, Qwen3.5-0.8B)."
                        ]
                    },
                    {
                        title: "3. Reward Function Design for GRPO (grpo_reward_design.typ)",
                        description: "Systematically developed and evaluated 18 reward architectures across 4 iterative generations:",
                        items: [
                            "Gen 1 (Naive Multi-Rewards): Combined format, syntax, execution, and n-gram rewards — revealed reward hacking where models maximized soft token overlap without producing executable SQL.",
                            "Gen 2 (Gated Composite Rewards): Introduced strict gating mechanisms (e.g., awarding schema/column bonuses only upon valid query execution).",
                            "Gen 3 (Partial vs. Complete Execution): Calibrated result-set overlap and schema-matching incentives.",
                            "Gen 4 (Minimalist & Strict – v4_strict_no_partial): Eliminated noisy lexical n-grams entirely, focusing strictly on binary database execution feedback."
                        ]
                    },
                    {
                        title: "4. Empirical Results & Benchmarks (evaluation.typ)",
                        description: "Comprehensive empirical validation across in-distribution and out-of-distribution benchmarks:",
                        items: [
                            "In-Distribution Improvements: GRPO outperforms SFT baselines on BIRD Dev by up to +5.61 percentage points and demonstrates consistent gains on SPIDER Dev.",
                            "Out-of-Distribution (OOD) Generalization: Significant performance gains on unseen domains: Spider-DK (+4.67 PP), EHRSQL (clinical domain, +5.55 PP), and Spider-Realistic.",
                            "Sub-Billion Scaling: The compact Qwen3.5-0.8B model achieved 59.59% Execution Accuracy on the official BIRD Test Set using FFT + GRPO + Majority Voting.",
                            "Parameter Efficiency: Yields ~9–10x higher parameter efficiency (accuracy per parameter) compared to 9B parameter models.",
                            "Official Submission: Verified entry on the official BIRD Benchmark Leaderboard."
                        ]
                    },
                    {
                        title: "5. Completed Artifacts & Conclusion (conclusion.typ)",
                        description: "Final deliverables and research synthesis:",
                        items: [
                            "Answered all 4 core research questions, thoroughly evaluated limitations (SQLite runtime focus, hardware scaling), and defined future research directions (Self-Correction RL, Multi-Dialect SQL, Agentic SQL)."
                        ]
                    }
                ],
                diagram: text2sqlDiagram
            }
        },
        {
            title: "Simity — Notebook Similarity Checker",
            slug: "simity",
            description: "Plagiarism detection for Jupyter Notebooks using semantic embeddings. Extracts code & markdown, computes similarity, generates heatmaps and reports at scale.",
            github: "https://github.com/shakha-de/simity",
            live: null,
            content: {
                overview: "Simity is a tool for university teaching assistants to detect similarity in student submissions. It uses semantic embeddings to compare both code and markdown content in Jupyter notebooks.",
                techStack: ["Python", "PyTorch", "Jupyter", "Pandas", "Sentence-Transformers"],
                challenges: "Handling large datasets of notebooks and generating meaningful heatmaps for visualization.",
                outcomes: ["High detection accuracy for semantic similarities", "Scalable batch processing", "Interactive Heatmap report generation and CLI"],
                metrics: [
                    { label: "Speed", value: "100 NBs/min" },
                    { label: "Plagiarism Threshold", value: "> 0.85" },
                    { label: "Core Model", value: "S-BERT (all-mpnet-base-v2)" },
                    { label: "Similarity Metric", value: "Cosine Similarity" }
                ],
                diagram: simityDiagram,
                semanticAnalysis: {
                    model: "all-mpnet-base-v2",
                    threshold: "> 0.85",
                    minLength: "50 chars",
                    similarityMetric: "Cosine Similarity",
                    scaleMinLabel: "0.0 (Irrelevant)",
                    scaleMaxLabel: "1.0 (Identical)",
                    description: "Measures the angle between high-dimensional sentence vectors. Unlike keyword matching, it detects synonyms and structural rewording."
                }
            }
        },
        {
            title: "Folia — Urban Tree Stewardship (In Progress)",
            slug: "folia",
            description: "Community app to protect urban trees in arid Central Asian cities. Priority zone mapping, impact tracking, and civic engagement features.",
            github: "https://github.com/shakha-de/folia",
            live: "https://folia-dev.vercel.app/",
            content: {
                overview: "Folia aims to tackle urban environmental challenges by empowering citizens to care for local trees. It focuses on mapping high-priority zones based on climatic data and tracking community impact.",
                techStack: ["React.js", "Next.js", "Supabase", "Tailwind CSS", "Mapbox"],
                challenges: "Integrating real-time climatic data with user-generated tree mapping.",
                outcomes: ["Live mapping system", "Engagement metrics for community members", "Mobile-first responsive design"],
                metrics: [
                    { label: "Uptime", value: "99.9%" },
                    { label: "Load Time", value: "<1.2s" },
                    { label: "Zones", value: "5+ Cities" }
                ],
                diagram: foliaDiagram
            }
        },
        {
            title: "MNIST Digit Classifier Service",
            slug: "mnist-classifier",
            description: "RESTful microservice serving a pre-trained ML model via Spring Boot. TensorFlow Java for inference; 99% accuracy on MNIST. Containerized with Docker.",
            github: "https://github.com/shakha-de/mnist-java-microservice",
            live: null,
            content: {
                overview: "A high-performance RESTful microservice designed to serve an MNIST digit classification model. Built with Spring Boot for a robust backend and TensorFlow Java for efficient on-device inference.",
                techStack: ["Java", "Spring Boot", "TensorFlow", "Docker", "JUnit", "Maven"],
                challenges: "Ensuring efficient model loading and inference latency within a containerized environment.",
                outcomes: ["99% accuracy on test data", "Fully containerized deployment", "Exposed via clean REST API"],
                metrics: [
                    { label: "Accuracy", value: "99.2%" },
                    { label: "Inference", value: "<15ms" },
                    { label: "Image size", value: "28x28px" }
                ],
                diagram: mnistDiagram
            }
        },
        {
            title: "git_stats",
            slug: "git-stats",
            description: "Small Streamlit app that analyses \`git log --numstat\` output and visualises it as a dashboard. Users can upload a git log file and interactively explore commit statistics and contributions.",
            github: "https://github.com/shakha-de/git_stats",
            live: "https://gitlogs.streamlit.app/",
            content: {
                overview: "A data visualization tool for git repositories. It parses git logs to provide insights into contributor activity, file growth, and commit patterns over time.",
                techStack: ["Python", "Streamlit", "Pandas", "Plotly", "Regex"],
                challenges: "Parsing complex git log outputs consistently across different repository formats.",
                outcomes: ["Real-time dashboard generation", "User-friendly file upload system", "Intuitive data visualizations"],
                metrics: [
                    { label: "Analysis", value: "Instant" },
                    { label: "Repo size", value: "Unlimited" },
                    { label: "Format", value: "--numstat" }
                ],
                diagram: gitStatsDiagram
            }
        },
        {
            title: "avp",
            slug: "avp",
            description: "ASCII Video Player — a command-line tool that plays videos in the terminal as ASCII art by converting frames to text characters. Offers adjustable ASCII width and works across various terminal emulators.",
            github: "https://github.com/shakha-de/avp",
            live: null,
            content: {
                overview: "AVP converts video frames into high-quality ASCII art in real-time. It's designed to run efficiently in the terminal while preserving as much detail as possible from the original source.",
                techStack: ["Python", "OpenCV", "Curses", "Numpy"],
                challenges: "Maintaining high frame rates while performing character mapping on the fly.",
                outcomes: ["Smooth terminal video playback", "Configurable character sets", "Cross-terminal compatibility"],
                metrics: [
                    { label: "FPS", value: "30-60" },
                    { label: "CPU", value: "Low" },
                    { label: "Output", value: "Term-Art" }
                ],
                diagram: avpDiagram
            }
        },
        {
            title: "sifr",
            slug: "sifr",
            description: "Sifr is a grading assistant built with Streamlit that helps explore and annotate student submissions, attach feedback, and export results. It supports Markdown/LaTeX and comes with Docker and local environment setup options.",
            github: "https://github.com/shakha-de/sifr",
            live: null,
            content: {
                overview: "Sifr streamlines the grading process for educators. It allows for quick annotation of code submissions, feedback attachment using Markdown/LaTeX, and structured data export for LMS integration.",
                techStack: ["Python", "Streamlit", "Docker", "LaTeX"],
                challenges: "Bridging the gap between messy student code submissions and structured instructor feedback.",
                outcomes: ["Reduced grading time by 40%", "Standardized feedback formats", "Easy Docker-based setup"],
                metrics: [
                    { label: "Setup", value: "Docker" },
                    { label: "Format", value: "TeX/MD" },
                    { label: "Efficiency", value: "+40%" }
                ],
                diagram: sifrDiagram
            }
        }
    ],
    awards: [
        "Bachelor Thesis Defense graded 1.0 (Sehr Gut) — highest distinction in the German academic grading system.",
        "1st Place in Software Engineering course project reviews (out of 130 students).",
        "Golden Medal for top 1% academic performance and exemplary conduct in school.",
    ],
    narrative: "Technical depth in Java/Spring and Python ML stack. Cloud & DevOps mindset with CI/CD, containerization, and event-driven systems. Strong problem-solving, leadership, and adaptability—rapidly learns new tech and expands into Go and cloud-native architectures.",
};
