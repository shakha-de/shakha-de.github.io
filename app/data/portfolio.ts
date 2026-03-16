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
        subheadline: "CS Student at MLU Halle | Backend Developer. Building scalable microservices and embedded solutions.",
    },
    about: {
        headline: "Engineering with Precision & Purpose",
        paragraphs: [
            "I am a computer science student based in Halle (Saale), Germany, with a strong focus on backend development, microservices, and cloud-native systems. I enjoy working close to production: designing APIs, containerizing services, and thinking about performance, reliability, and clean architecture.",
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
            coursework: ["Data Structures & Algorithms", "OOP", "Design", "Computer Organization", "Data Science", "ML", "AI", "Image Processing"],
        },
    ],
    experience: [
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
        backend: ["Java", "Spring Boot", "Spring Security", "JPA/Hibernate", "Python", "PostgreSQL", "SQLite"],
        infrastructure: ["AWS", "Docker", "CI/CD", "Linux", "Bash"],
        tools: ["Git", "VS Code", "Intellij", "Jupyter Notebooks", "Bruno", "K6", "Postman"],
        frontend: ["React.js", "JavaScript", "HTML", "CSS", "Streamlit"],
        data_science: ["Pandas", "Matplotlib", "Seaborn", "Hugging Face"],
        systems: ["Python", "C"],
        all: ["Java", "Python", "C", "JavaScript", "SQL", "Spring Boot", "Spring Security", "JPA/Hibernate", "React.js", "TensorFlow (Java)", "Kafka", "Docker", "Linux", "Pandas", "Matplotlib", "Seaborn", "Hugging Face", "Streamlit", "SQLite"],
    },
    projects: [
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
                outcomes: ["99% accuracy on test data", "Fully containerized deployment", "Exposed via clean REST API"]
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
                outcomes: ["High detection accuracy for semantic similarities", "Scalable batch processing", "Interactive Heatmap report generation and CLI"]
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
                outcomes: ["Live mapping system", "Engagement metrics for community members", "Mobile-first responsive design"]
            }
        },
        {
            title: "git_stats",
            slug: "git-stats",
            description: "Small Streamlit app that analyses `git log --numstat` output and visualises it as a dashboard. Users can upload a git log file and interactively explore commit statistics and contributions.",
            github: "https://github.com/shakha-de/git_stats",
            live: "https://gitlogs.streamlit.app/",
            content: {
                overview: "A data visualization tool for git repositories. It parses git logs to provide insights into contributor activity, file growth, and commit patterns over time.",
                techStack: ["Python", "Streamlit", "Pandas", "Plotly", "Regex"],
                challenges: "Parsing complex git log outputs consistently across different repository formats.",
                outcomes: ["Real-time dashboard generation", "User-friendly file upload system", "Intuitive data visualizations"]
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
                outcomes: ["Smooth terminal video playback", "Configurable character sets", "Cross-terminal compatibility"]
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
                outcomes: ["Reduced grading time by 40%", "Standardized feedback formats", "Easy Docker-based setup"]
            }
        }
    ],
    awards: [
        "1st Place in Software Engineering course project reviews (out of 130 students).",
        "Golden Medal for top 1% academic performance and exemplary conduct in school.",
    ],
    narrative: "Technical depth in Java/Spring and Python ML stack. Cloud & DevOps mindset with CI/CD, containerization, and event-driven systems. Strong problem-solving, leadership, and adaptability—rapidly learns new tech and expands into Go and cloud-native architectures.",
};
