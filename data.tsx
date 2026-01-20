import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Github, Monitor, Rocket, Computer, Crop, Book, Pencil, Settings, Database, Code, Layers, GraduationCap, Briefcase, Globe, Server, Phone, Mail, MapPin } from "lucide-react";

export const personalInfo = {
    name: "Eudys García Saviñón",
    title: {
        es: "Desarrollador Full Stack",
        en: "Full Stack Developer"
    },
    location: {
        es: "Santo Domingo, República Dominicana",
        en: "Santo Domingo, Dominican Republic"
    },
    phone: "829-774-5391",
    email: "eudysgs.s@gmail.com",
    website: "www.eudexcode.com",
    profileImage: "/home-5.png",
    avatarImage: "/avatar-works.png",
    cvLinks: {
        es: "https://drive.google.com/file/d/1XiTlMT6ivNmmfX4Q2OhIDBQS9Y9oXp_O/view?usp=sharing",
        en: "https://drive.google.com/file/d/1Q75dT9Uk-cQPiyS-cdcHkyG-Bla2r8Uc/view?usp=sharing"
    }
};

export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/eudys-garcia-s-bb4377290/",
        name: "LinkedIn"
    },
    {
        id: 2,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/eudysgarcia",
        name: "GitHub"
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: {
            es: "Inicio",
            en: "Home"
        },
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: {
            es: "Sobre Mí",
            en: "About Me"
        },
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: {
            es: "Servicios",
            en: "Services"
        },
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: {
            es: "Portafolio",
            en: "Portfolio"
        },
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
];

export const professionalProfile = {
    es: "Desarrollador Full Stack orientado a resultados, con formación técnica en informática y experiencia práctica en desarrollo web, mantenimiento de software y resolución de problemas. Poseo habilidades sólidas en frontend y backend, especialmente en tecnologías como JavaScript, React, Node.js, PHP y .NET. Destaco por mi pensamiento analítico, capacidad para trabajar en equipo, enfoque en la calidad del código y compromiso con la mejora continua.",
    en: "Results-oriented Full Stack Developer with technical training in computer science and practical experience in web development, software maintenance, and problem-solving. I have strong skills in frontend and backend, especially in technologies such as JavaScript, React, Node.js, PHP, and .NET. I stand out for my analytical thinking, ability to work in teams, focus on code quality, and commitment to continuous improvement."
};

export const skills = {
    languages: ["JavaScript", "TypeScript", "PHP", "C#", "SQL"],
    frameworks: ["React", "Node.js", "Next.js", "Fastify", "Express", "Nest.js", "Laravel", "ASP.NET MVC", ".NET 8", "ASP.NET Core Web API"],
    orms: ["Entity Framework", "Sequelize"],
    databases: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB"],
    tools: ["Git", "GitHub", "Docker", "WebSockets", "GraphQL", "SignalR Client", "JSON"],
    servers: ["XAMPP", "Laragon", "IIS"],
    frontend: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
    methodology: ["Scrum", "Jira"],
    languages_spoken: {
        es: ["Español (nativo)", "Inglés (intermedio)"],
        en: ["Spanish (native)", "English (intermediate)"]
    }
};

export const experience = [
    {
        id: 1,
        title: {
            es: "Desarrollador Full Stack",
            en: "Full Stack Developer"
        },
        company: "Signos Framework S.R.L",
        location: {
            es: "Santo Domingo, República Dominicana",
            en: "Santo Domingo, Dominican Republic"
        },
        date: {
            es: "Jul 2024 - Actualidad",
            en: "Jul 2024 - Present"
        },
        description: {
            es: [
                "Desarrollé y mantuve módulos backend cumpliendo con los estándares de calidad y estructura del sistema principal",
                "Participé en la creación de endpoints para funcionalidades clave del sistema",
                "Implementé validaciones, reglas de negocio y procesos internos en controladores y servicios",
                "Colaboré con el equipo de frontend para la integración de vistas dinámicas",
                "Realicé análisis de flujos de negocio, identificando mejoras en procesos",
                "Implementé mejoras en la base de datos, optimizando estructuras y consultas",
                "Manejé control de versiones con Git, integrándome a flujos colaborativos",
                "Desarrollé e integré soluciones con WebSockets para comunicación en tiempo real"
            ],
            en: [
                "Developed and maintained backend modules meeting quality standards and main system structure",
                "Participated in creating endpoints for key system functionalities",
                "Implemented validations, business rules, and internal processes in controllers and services",
                "Collaborated with frontend team for dynamic views integration",
                "Analyzed business flows, identifying process improvements",
                "Implemented database improvements, optimizing structures and queries",
                "Managed version control with Git, integrating into collaborative workflows",
                "Developed and integrated WebSocket solutions for real-time communication"
            ]
        }
    },
    {
        id: 2,
        title: {
            es: "Técnico de Programación",
            en: "Programming Technician"
        },
        company: "ADESS",
        location: {
            es: "Santo Domingo, República Dominicana",
            en: "Santo Domingo, Dominican Republic"
        },
        date: {
            es: "Oct 2023 - Jul 2024",
            en: "Oct 2023 - Jul 2024"
        },
        description: {
            es: [
                "Desarrollé y mantuve aplicaciones internas usando PHP, Laravel y .NET",
                "Diseñé y optimicé bases de datos MySQL",
                "Participé en reuniones ágiles de planificación y revisiones de código",
                "Implementé pruebas unitarias y funcionales, reduciendo errores en producción",
                "Documenté funcionalidades y flujos de trabajo para facilitar la continuidad técnica del equipo"
            ],
            en: [
                "Developed and maintained internal applications using PHP, Laravel, and .NET",
                "Designed and optimized MySQL databases",
                "Participated in agile planning meetings and code reviews",
                "Implemented unit and functional tests, reducing production errors",
                "Documented functionalities and workflows to facilitate team technical continuity"
            ]
        }
    }
];

export const education = [
    {
        id: 1,
        degree: {
            es: "Ingeniería en Software",
            en: "Software Engineering"
        },
        institution: "UNICARIBE",
        date: {
            es: "2024 - Actualidad",
            en: "2024 - Present"
        },
        icon: <GraduationCap size={24} />
    },
    {
        id: 2,
        degree: {
            es: "Técnico en Diseño y Desarrollo de Aplicaciones",
            en: "Technician in Application Design and Development"
        },
        institution: {
            es: "Instituto Nacional de Formación Técnico Profesional (INFOTEP)",
            en: "National Institute of Professional Technical Training (INFOTEP)"
        },
        date: "2022 - 2023",
        icon: <GraduationCap size={24} />
    },
    {
        id: 3,
        degree: {
            es: "Tecnólogo en Informática",
            en: "Computer Technology"
        },
        institution: {
            es: "Liceo Técnico Profesional Cardenal Sancha Fe y Alegría",
            en: "Technical Professional School Cardinal Sancha Fe y Alegría"
        },
        date: "2020 - 2021",
        icon: <GraduationCap size={24} />
    }
];

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: {
            es: "Años de experiencia",
            en: "Years of experience"
        },
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 5,
        text: {
            es: "Clientes satisfechos",
            en: "Satisfied clients"
        },
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 10,
        text: {
            es: "Proyectos finalizados",
            en: "Finished projects"
        },
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        id: 1,
        icon: <Monitor />,
        title: {
            es: "Desarrollo Frontend",
            en: "Frontend Development"
        },
        description: {
            es: "Desarrollo de interfaces de usuario atractivas y funcionales con tecnologías como React, Next.js, HTML, CSS y JavaScript.",
            en: "Development of attractive and functional user interfaces with technologies like React, Next.js, HTML, CSS, and JavaScript."
        },
    },
    {
        id: 2,
        icon: <Server />,
        title: {
            es: "Desarrollo Backend",
            en: "Backend Development"
        },
        description: {
            es: "Implementación de servidores y APIs con Node.js, PHP, Laravel y .NET. Manejo de bases de datos relacionales y no relacionales.",
            en: "Implementation of servers and APIs with Node.js, PHP, Laravel, and .NET. Management of relational and non-relational databases."
        },
    },
    {
        id: 3,
        icon: <Computer />,
        title: {
            es: "Desarrollo de Aplicaciones Web",
            en: "Web Application Development"
        },
        description: {
            es: "Construcción de aplicaciones web completas con React, Node.js, Next.js y ASP.NET MVC.",
            en: "Building complete web applications with React, Node.js, Next.js, and ASP.NET MVC."
        },
    },
    {
        id: 4,
        icon: <Crop />,
        title: {
            es: "Mantenimiento y Soporte",
            en: "Maintenance & Support"
        },
        description: {
            es: "Resolución de problemas y errores. Pruebas para asegurar la calidad del código. Optimización de rendimiento.",
            en: "Problem-solving and bug fixes. Testing to ensure code quality. Performance optimization."
        },
    },
    {
        id: 5,
        icon: <Book />,
        title: {
            es: "Consultoría Tecnológica",
            en: "Technology Consulting"
        },
        description: {
            es: "Asesoría y mejora de sistemas de información. Resolución de problemas técnicos. Análisis de flujos de negocio.",
            en: "Advice and improvement of information systems. Technical problem-solving. Business flow analysis."
        },
    },
    {
        id: 6,
        icon: <Pencil />,
        title: {
            es: "Software Personalizado",
            en: "Custom Software"
        },
        description: {
            es: "Creación de soluciones a medida. Colaboración en proyectos de software. Integración de sistemas.",
            en: "Creation of custom solutions. Collaboration on software projects. System integration."
        },
    },
    {
        id: 7,
        icon: <Settings />,
        title: {
            es: "Optimización de Código",
            en: "Code Optimization"
        },
        description: {
            es: "Revisión y optimización de código existente. Implementación de mejoras y nuevas funcionalidades.",
            en: "Review and optimization of existing code. Implementation of improvements and new functionalities."
        },
    },
    {
        id: 8,
        icon: <Database />,
        title: {
            es: "Gestión de Bases de Datos",
            en: "Database Management"
        },
        description: {
            es: "Diseño, optimización e implementación de bases de datos MySQL, PostgreSQL, SQL Server y MongoDB.",
            en: "Design, optimization, and implementation of MySQL, PostgreSQL, SQL Server, and MongoDB databases."
        },
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Hablemos de Cine",
        image: "/cinetalk.png",
        urlGitlab: "https://github.com/eudysgarcia/HDC-Server",
        urlDemo: "https://hablemosdecine.vercel.app/",
        technologies: ["React", "Next.js", "Tailwind CSS", "API"],
        description: {
            es: "Aplicación web completa sobre cine con información de películas, reseñas y más",
            en: "Complete web application about cinema with movie information, reviews and more"
        }
    },
    {
        id: 2,
        title: "Tic Tac Toe",
        image: "/image-1.png",
        urlGitlab: "https://github.com/eudysgarcia/TicTacToe",
        urlDemo: "#!",
        technologies: ["React", "JavaScript", "CSS"],
        description: {
            es: "Juego clásico de Tres en Raya desarrollado con React",
            en: "Classic Tic Tac Toe game developed with React"
        }
    },
    {
        id: 3,
        title: "Color Game",
        image: "/image-2.png",
        urlGitlab: "https://github.com/eudysgarcia/Color-Game",
        urlDemo: "#!",
        technologies: ["JavaScript", "HTML", "CSS"],
        description: {
            es: "Juego interactivo de adivinanza de colores",
            en: "Interactive color guessing game"
        }
    },
    {
        id: 4,
        title: "Weather App",
        image: "/image-3.png",
        urlGitlab: "https://github.com/eudysgarcia/WeatherApp",
        urlDemo: "#!",
        technologies: ["JavaScript", "API", "CSS"],
        description: {
            es: "Aplicación del clima con integración de API",
            en: "Weather application with API integration"
        }
    },
    {
        id: 5,
        title: "Quiz Game",
        image: "/image-4.png",
        urlGitlab: "https://github.com/eudysgarcia/QuizGame",
        urlDemo: "#!",
        technologies: ["JavaScript", "HTML", "CSS"],
        description: {
            es: "Juego de preguntas y respuestas interactivo",
            en: "Interactive quiz game"
        }
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Arismendy Polanco",
        role: {
            es: "Compañero de Trabajo",
            en: "Work Colleague"
        },
        description: {
            es: "Trabajar con Eudys ha sido una experiencia enriquecedora. Su capacidad para mantener la calma bajo presión y resolver problemas de manera eficiente siempre me ha impresionado. Además, su carácter accesible y disposición para colaborar lo convierten en un miembro valioso del equipo y en una persona con la que es un gusto trabajar.",
            en: "Working with Eudys has been an enriching experience. His ability to stay calm under pressure and solve problems efficiently has always impressed me. Additionally, his approachable character and willingness to collaborate make him a valuable team member and someone pleasant to work with."
        },
        imageUrl: "/profile1.png",
        phone: "809-828-3462"
    },
    {
        id: 2,
        name: "Lenin Mejía",
        role: {
            es: "Compañero de Trabajo",
            en: "Work Colleague"
        },
        description: {
            es: "Trabajar con Eudys es una experiencia inigualable. Su dedicación y entusiasmo contagian a todo el equipo. Como persona, es alguien de fiar, siempre dispuesto a echar una mano. En el trabajo, su atención al detalle y su creatividad destacan en cada proyecto.",
            en: "Working with Eudys is an unparalleled experience. His dedication and enthusiasm are contagious to the whole team. As a person, he is trustworthy, always willing to lend a hand. At work, his attention to detail and creativity stand out in every project."
        },
        imageUrl: "/profile2.png",
        phone: "809-265-6979"
    },
    {
        id: 3,
        name: "Juan Santana",
        role: {
            es: "Amigo y Colega",
            en: "Friend and Colleague"
        },
        description: {
            es: "Conocí a Eudys hace años y puedo decir sin dudar que es una de las personas más amables y trabajadoras que he encontrado. Su habilidad para resolver problemas y su capacidad de liderazgo son impresionantes. Fuera del trabajo, su empatía y buen humor hacen que todos se sientan valorados.",
            en: "I met Eudys years ago and can say without hesitation that he is one of the kindest and hardest-working people I have encountered. His problem-solving skills and leadership ability are impressive. Outside of work, his empathy and good humor make everyone feel valued."
        },
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Jaime Terrero",
        role: {
            es: "Supervisor",
            en: "Supervisor"
        },
        description: {
            es: "Eudys siempre aporta una energía positiva al ambiente laboral. Es increíblemente organizado y eficiente, lo cual nos ha ayudado a cumplir nuestros objetivos una y otra vez. A nivel personal, es alguien en quien puedes confiar y con quien es fácil formar una amistad duradera.",
            en: "Eudys always brings positive energy to the work environment. He is incredibly organized and efficient, which has helped us meet our goals time and time again. On a personal level, he is someone you can trust and with whom it is easy to form a lasting friendship."
        },
        imageUrl: "/profile4.png",
        phone: "829-877-7227"
    },
];

export const references = [
    {
        id: 1,
        name: "Arismendy Polanco",
        phone: "809-828-3462"
    },
    {
        id: 2,
        name: "Lenin Mejía",
        phone: "809-265-6979"
    },
    {
        id: 3,
        name: "Jaime Terrero",
        phone: "829-877-7227"
    }
];
