import { Project, ProjectKind, ProjectType } from "@/lib/types";

export const ClientProjectList: Project[] = [
    {
        projectName: "whispy",
        imageSrc: "/whispy.png",
        desc: "effortless AI voice detection",
        link: "https://github.com/vivekupasani/whispy",
        timeline: "March 2026",
        category: "Desktop App Development",
        timelineMobile: "March 2026",
        categoryMobile: "Desktop App Dev",
        slug: "whispy",
        techStack: ["typescript", "React.js", "Electron.js", "Tailwind CSS"],
        details: [
            "Push-to-talk recording, hold a key, speak, and release to transcribe instantly.",
            "Fast speech-to-text powered by Groq’s Whisper Large V3.",
            "Optional AI refinement to clean up grammar and remove filler words.",
            "Customizable hotkeys (Option, Command, Control, or F1–F12).",
            "Auto-pastes text into any active app while running quietly in the tray."
        ],
        type: ProjectType.website,
        kind: ProjectKind.client
    },
    {
        projectName: "luxora",
        imageSrc: "/opengraph-image1.png",
        desc: "e-commerce website for jewelry",
        link: "https://online-jewelry-shop-ecommerce.vercel.app/",
        timeline: "March 2026 - Present",
        category: "Web Development",
        timelineMobile: "March 2026 - Present",
        categoryMobile: "Website Dev",
        slug: "luxora",
        techStack: ["typescript", "Next.js", "Tailwind CSS", "Motion", "Supabase", "Dodopayments"],
        details: [
            "Product Catalog: Users can browse a wide collection of jewelry items with high-quality images, detailed descriptions, and pricing.",
            "Shopping Cart: Users can add products to the cart, update quantities, and manage selected items before purchase.",
            "Secure Checkout: Users can complete their purchase with a smooth and secure checkout process including payment integration.",
            "Order Management: Users can track their orders, view order history, and manage their purchases easily."
        ],
        type: ProjectType.website,
        kind: ProjectKind.client
    },
    {
        projectName: "hooked",
        imageSrc: "/hookd-logo.png",
        desc: "analyze your video to increase retention.",
        link: "https://www.hookd.live/",
        timeline: "Jul 2025 - Aug 2025",
        category: "Web Development",
        timelineMobile: "July 2025 - August 2025",
        categoryMobile: "Website dev",
        slug: "hooked",
        techStack: ["React", "Next.js", "Typescript", "Tailwind CSS", "Framer Motion", "Stripe", "Firebase"],
        details: [
            "Developed a video analysis platform to help creators increase retention.",
            "Implemented real-time analytics and visualization tools.",
            "Designed a minimal and highly responsive user interface.",
            "Optimized video processing workflows for faster results."
        ],
        type: ProjectType.website,
        kind: ProjectKind.client
    },
    {
        projectName: "drft marketing",
        imageSrc: "/ddrft-logo.png",
        desc: "influencer marketing that delivers.",
        link: "https://www.drftmarketing.com/",
        timeline: "Aug 2025 • 1 month",
        category: "Web Development",
        timelineMobile: "August 2025 • 1 month",
        categoryMobile: "Website dev",
        slug: "drft-marketing",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
        details: [
            "Built a marketing agency landing page",
            "Ensured high performance and SEO optimization."
        ],
        type: ProjectType.website,
        kind: ProjectKind.client
    },
    {
        projectName: "microcam",
        imageSrc: "https://microcam.in/logo.png",
        desc: "Advanced Security Solutions.",
        link: "https://microcam.in/",
        timeline: "Aug 2025 • 1 month",
        category: "Web Development",
        timelineMobile: "August 2025 • 1 month",
        categoryMobile: "Website dev",
        slug: "microcam",
        techStack: ["React", "Node.js", "Express", "MongoDB"],
        details: [
            "Designed and developed a website for advanced security solutions.",
            "Implemented a custom CMS for managing product listings.",
            "Integrated inquiry forms and lead management systems.",
            "Focused on building a secure and scalable architecture."
        ],
        type: ProjectType.website,
        kind: ProjectKind.client
    },
    {
        projectName: "instakit",
        imageSrc: "https://imgs.search.brave.com/eSvUIttMIjrULs2GO_t5QrN6QcHujXW_e21glSKnxXg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucHJpc21pYy5p/by9tZWx0d2F0ZXIv/ZmQ1NzMwMzMtZmI3/ZC00YWU0LWIwZjQt/M2I3MWQ0M2RmZWFk/X0Jsb2ctMTUwMHg4/MTMtTWVkaWEtS2l0/LnBuZz9xPTkwJnJl/Y3Q9MTQwLDAsMTIy/MCw4MTMmJnc9MTky/MCZkcHI9MQ",
        desc: "generate your media kit in seconds.",
        link: "https://www.instakit.live/",
        timeline: "Aug 2025 - Sep 2025",
        category: "Web Development",
        timelineMobile: "August 2025 - September 2025",
        categoryMobile: "Website dev",
        slug: "instakit",
        techStack: ["Next.js", "React", "Tailwind CSS", "PDFGen", "Stripe", "Firebase"],
        details: [
            "Created an automated media kit generator for influencers.",
            "Implemented server-side PDF generation for kits.",
            "Streamlined the user onboarding and payment process."
        ],
        type: ProjectType.website,
        kind: ProjectKind.client
    },
    {
        projectName: "jsonbazaar",
        imageSrc: "/opengraph-image1.png",
        desc: "free fake rest api store",
        link: "https://jsonbazaar.onrender.com/",
        timeline: "Mar 2025 • 1 month",
        category: "Web Development",
        timelineMobile: "March 2025 • 1 month",
        categoryMobile: "Website Dev",
        slug: "jsonbazaar",
        techStack: ["Node.js", "Express", "EJS"],
        details: [
            "Built a mock REST API platform similar to JSONPlaceholder for developers to test and prototype applications.",
            "Implemented endpoints for resources like posts, users, comments, and todos.",
            "Enabled full CRUD operations for testing API requests and responses.",
            "Designed the platform to provide realistic JSON data for frontend development.",
            "Created a simple and developer-friendly interface for quick API testing.",
            "Ensured fast and scalable API responses suitable for development environments."
        ],
        type: ProjectType.website,
        kind: ProjectKind.personal
    },
    {
        projectName: "mock3wallet",
        imageSrc: "/opengraph-image1.png",
        desc: "Web3 wallet simulator",
        link: "https://github.com/vivekupasani/mock3wallet",
        timeline: "May 2025 - Jun 2025",
        category: "App Development",
        timelineMobile: "May 2025 - June 2025",
        categoryMobile: "App Dev",
        slug: "mock3wallet",
        techStack: ["React Native", "TypeScript", "Node.js", "Express.js", "MongoDB"],
        details: [
            "Developing a full-stack crypto wallet simulation app that mimics Web3 wallet functionality without blockchain integration.",
            "Implementing wallet creation, wallet import, token management, transactions, contact book, and user settings features.",
            "Built a responsive and intuitive mobile frontend using React Native.",
            "Added authentication flows including login and wallet management UI.",
            "Designed a secure backend using Express.js with token-based authentication.",
            "Implemented CRUD operations for wallets, contacts, and transaction records.",
            "Built transaction state tracking to simulate real wallet behavior.",
            "Structured the backend using a clean MVC architecture for scalability and maintainability.",
            "Simulated real-world Web3 wallet workflows to create a learning environment before blockchain integration."
        ],
        type: ProjectType.mobile,
        kind: ProjectKind.personal
    },
    {
        projectName: "medremind",
        imageSrc: "/opengraph-image1.png",
        desc: "Web3 wallet simulator",
        link: "https://github.com/vivekupasani/medremind",
        timeline: "March 2026 - March 2026",
        category: "App Development",
        timelineMobile: "March 2026 - March 2026",
        categoryMobile: "App Dev",
        slug: "medremind",
        techStack: ["React Native", "TypeScript", "AsyncStorage"],
        details: [
            "Medication Scheduling: Set up medication schedules with custom reminders for timely doses.",
            "Refill Tracking: Monitor medicine supply and get alerts for refills.",
            "Cross-Platform Support: Works seamlessly on both iOS and Android devices.",
            "Biometric Authentication: Secure access using Face ID or Touch ID.",
            "Progress Tracking: Track daily medication intake with history logs.",
            "Calendar Integration: Manage doses efficiently with calendar support.",
            "Secure Storage: Safely store data locally using AsyncStorage."
        ],
        type: ProjectType.mobile,
        kind: ProjectKind.personal
    },
    {
        projectName: "pixsy",
        imageSrc: "/opengraph-image1.png",
        desc: "social media platform",
        link: "https://pixsy-b2ccb.web.app",
        timeline: "Aug 2024 - Oct 2024",
        category: "App Development",
        timelineMobile: "August 2024 - October 2024",
        categoryMobile: "App Dev",
        slug: "pixsy",
        techStack: ["Flutter", "Firebase", "Dart"],
        details: [
            "Built a complete social media platform with real-time features.",
            "Implemented image sharing, likes, and comments.",
            "Developed a real-time chat system using Firebase Firestore.",
            "Focused on creating a smooth and engaging user experience."
        ],
        type: ProjectType.mobile,
        kind: ProjectKind.personal
    },
    {
        projectName: "chatapp",
        imageSrc: "/opengraph-image1.png",
        desc: "real-time chat application",
        link: "https://github.com/vivekupasani/chatapp",
        timeline: "July 2024 - August 2024",
        category: "App Development",
        timelineMobile: "July 2024 - August 2024",
        categoryMobile: "App Dev",
        slug: "chatapp",
        techStack: ["Android", "Firebase", "Kotlin"],
        details: [
            "User Authentication: Sign up and login functionality.",
            "Profile Setup: Users can create and update their profile with name, profile picture, and about info.",
            "Friend Requests: Send, receive, and accept friend requests.",
            "Text Messaging: Chat with other users through instant messages.",
            "Image Sharing: Send and receive images in chat.",
            "Status Updates: Upload and view status updates from other users.",
            "Theme Support: Supports both light and dark themes for a consistent user experience."
        ],
        type: ProjectType.mobile,
        kind: ProjectKind.personal
    },
    {
        projectName: "syncra",
        imageSrc: "/opengraph-image1.png",
        desc: "ai powered voice assistant",
        link: "https://github.com/vivekupasani/syncra",
        timeline: "July 2024 - August 2024",
        category: "App Development",
        timelineMobile: "July 2024 - August 2024",
        categoryMobile: "App Dev",
        slug: "syncra",
        techStack: ["flutter", "gemini", "firebase"],
        details: [
            "Get AI-generated answers and assistance in real time",
        ],
        type: ProjectType.mobile,
        kind: ProjectKind.personal
    }
]

export const PersonalProjectList: Project[] = [
    {
        projectName: "portfolio v2",
        imageSrc: "/opengraph-image1.png",
        desc: "My personal developer portfolio.",
        link: "https://github.com/vivekupasani/portfolio-v2",
        timeline: "Jan 2026 - Present",
        category: "Web Development",
        timelineMobile: "January 2026 - Present",
        categoryMobile: "Website Dev",
        slug: "portfolio-v2",
        techStack: ["Next.js", "Typescript", "Tailwind CSS", "Framer Motion"],
        details: [
            "Designed and built a modern portfolio using Next.js and Framer Motion.",
            "Implemented dark mode, smooth animations, and responsive layout.",
            "Showcasing personal and client projects with detailed case studies."
        ],
        type: ProjectType.website,
        kind: ProjectKind.personal
    }
]

export const AllProjects: Project[] = [...ClientProjectList, ...PersonalProjectList];
