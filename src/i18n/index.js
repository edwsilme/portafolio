import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    es: {
        translation: {
            // Navegación
            "nav_about": "Sobre mí",
            "nav_skills": "Habilidades",
            "nav_projects": "Proyectos",
            "nav_experience": "Experiencia",
            "nav_contact": "Contacto",

            // Hero / Inicio
            "hero_title": "Desarrollador Backend & Ingeniero de Sistemas",
            "hero_subtitle": "Apasionado por la tecnología y la innovación.",
            "hero_hello": "Hola, soy",

            "hero_line1": "Desarrollador Backend 🖥️",
            "hero_line2": "Apasionado por la tecnología 🤖",
            "hero_line3": "Robótica & Videojuegos 🎮",

            // Sobre mí (Flat structure)
            "about_title": "Sobre mí",
            "about_p1": "Cuento con más de tres años de experiencia en desarrollo backend, trabajando principalmente con tecnologías .NET y C#. Además, tengo conocimientos en Java y Python. Actualmente curso la carrera de Ingeniería de Sistemas y me encuentro en constante formación en áreas como Realidad Virtual, Inteligencia Artificial y Robótica. Mi meta es convertirme en un ingeniero especializado en innovación y tecnologías emergentes.",
            "about_p2": "He participado en torneos de robótica, como por ejemplo en 2015, donde desarrollé un robot autónomo. Aunque no obtuve primer lugar, la experiencia fue profundamente enriquecedora y marcó el inicio de mi pasión por la robótica. Más recientemente, participó en el Rally Latinoamericano de Innovación 2024, donde, junto a mi equipo, obtuvimos el tercer lugar. Esta experiencia reforzó mi capacidad para trabajar bajo presión y desarrollar soluciones creativas e innovadoras ante problemas reales.",

            // Habilidades
            "skills_title": "Habilidades Técnicas",
            "skills_languages": "Lenguajes de Programación",
            "skills_backend": "Arquitectura & Backend",
            "skills_db": "Bases de Datos & Infraestructura",
            "skills_emerging": "Tecnologías Emergentes",

            // Proyectos
            "projects_title": "Proyectos destacados",
            "projects_subtitle": "Selección de trabajos recientes en .NET, Python y Robótica.",
            "repo_btn": "Código",
            "demo_btn": "Documentación",

            // Experiuencia
            "exp_title_main": "Trayectoria Profesional (Desarrollo)",
            "exp_title_base": "Experiencia Base en Infraestructura y Soporte",

            "exp_dev_role1": "Desarrollador Backend (.NET / C#)",
            "exp_dev_desc1": "Desarrollo de aplicaciones utilizando .NET Framework y .NET Core, enfocado en la implementación de servicios web y APIs escalables. Optimización de consultas y persistencia de datos utilizando SQL Server y Entity Framework Core.",

            "exp_dev_role2": "Desarrollador .NET",
            "exp_dev_desc2": "Desarrollo de aplicaciones backend utilizando .NET Framework, .NET Core y Java, enfocado en la construcción e integración de APIs REST y SOAP. Documentación técnica y apoyo en definición de arquitectura de software, aplicando buenas prácticas de desarrollo y mantenimiento de soluciones tecnológicas.",

            "exp_dev_role3": "Desarrollador .NET",
            "exp_dev_desc3": "Desarrollo de aplicaciones backend utilizando .NET Framework, .NET Core, enfocado en la construcción e integración de APIs REST y SOAP. Documentación técnica y apoyo en definición de arquitectura de software, aplicando buenas prácticas de desarrollo y mantenimiento de soluciones tecnológicas.",

            "exp_dev_role4": "Analista de Sistemas",
            "exp_dev_desc4": "Validación y diagnóstico de fallas en sistemas de información, administración de bases de datos MySQL y soporte técnico de primer y segundo nivel. Desarrollo web utilizando Laravel, así como análisis de los datos y detección de errores en código para garantizar el correcto funcionamiento y mejora continua de las aplicaciones y sistemas tecnológicos.",

            "exp_tech_role": "Especialista en Soporte Técnico e Infraestructura Hardware/Redes",
            "exp_tech_company": "Diversas Empresas / Trayectoria TI",
            "exp_tech_date": "Antes de 2019 (~10 años de experiencia)",
            "exp_tech_intro": "Sólida trayectoria previa en infraestructura, redes y mantenimiento de sistemas. Esta base técnica complementa mi perfil backend, otorgándome una visión integral para el diagnóstico de fallas en producción y el despliegue eficiente de software.",

            "exp_tech_cat1_title": "🏢 Soporte Corporativo y Gestión TI",
            "exp_tech_cat1_s1": "Asistencia remota y soporte a usuario final para grandes organizaciones (Grupo Carvajal).",
            "exp_tech_cat1_s2": "Gestión y control de servicios de TI bajo metodologías estructuradas en Service Manager.",
            "exp_tech_cat1_s3": "Administración y gestión de identidades/accesos mediante Directorio Activo (Active Directory).",

            "exp_tech_cat2_title": "🔌 Electrónica, Hardware y Laboratorio Técnico",
            "exp_tech_cat2_s1": "Diagnóstico, revisión y reparación integral de equipos de cómputo (Laptops y Desktops de Nivel 1 y 2).",
            "exp_tech_cat2_s2": "Mantenimiento correctivo y componentes electrónicos: tablets, televisores, equipos de sonido y sistemas de audio.",
            "exp_tech_cat2_s3": "Interpretación avanzada de planos electrónicos y reparación de circuitos.",

            "exp_tech_cat3_title": "🌐 Conectividad, Redes e Infraestructura de Audio",
            "exp_tech_cat3_s1": "Diseño, revisión, instalación y administración de infraestructura de redes informáticas internas.",
            "exp_tech_cat3_s2": "Soporte técnico avanzado y diagnóstico de conectividad en redes de datos.",
            "exp_tech_cat3_s3": "Instalación, mantenimiento y soporte técnico de equipos de audio comerciales y redes para música ambiental.",

            "exp_tech_cat4_title": "🎓 Convenio SENA (Soporte Institucional y Co-instrucción)",
            "exp_tech_cat4_s1": "Revisión, optimización y reparación de la infraestructura tecnológica en instituciones educativas del convenio.",
            "exp_tech_cat4_s2": "Rol de Auxiliar de Instructor: Asesoría técnica en sistemas informáticos y mantenimiento preventivo.",
            "exp_tech_cat4_s3": "Apoyo directo en el despliegue e instalación de proyectos de redes para el sector educativo.",

            // Interes
            "interest_title": "Fuera del código",
            "interest_description": "Cuando no estoy programando o explorando IA y robótica, escucho música y aprendo japonés y mandarín. También disfruto los videojuegos y la astronomía.",

            // Contacto
            "contact_title": "¡Hablemos!",
            "contact_subtitle": "¿Quieres trabajar conmigo o ver un proyecto en detalle? Escríbeme.",
            "contact_btn": "Escríbeme",
            "contact_end": "Disponible para trabajo remoto desde Colombia."
        }
    },
    en: {
        translation: {
            // Navegación
            "nav_about": "About me",
            "nav_skills": "Skills",
            "nav_projects": "Projects",
            "nav_experience": "Experience",
            "nav_contact": "Contact",

            // Hero / Inicio
            "hero_title": "Backend Developer & Systems Engineer",
            "hero_subtitle": "Passionate about technology and innovation.",
            "hero_hello": "Hi, I'm",

            "hero_line1": "Backend Developer 🖥️",
            "hero_line2": "Technology Enthusiast 🤖",
            "hero_line3": "Robotics & Video Games 🎮",

            // Sobre mí (Flat structure)
            "about_title": "About Me",
            "about_p1": "I have over three years of experience in backend development, primarily working with .NET and C# technologies. Additionally, I have knowledge in Java and Python. I am currently pursuing a degree in Systems Engineering and I am constantly training in areas such as Virtual Reality, Artificial Intelligence, and Robotics. My goal is to become an engineer specialized in innovation and emerging technologies.",
            "about_p2": "I have participated in robotics tournaments, such as in 2015, where I developed an autonomous robot. Although I didn't take first place, the experience was deeply enriching and marked the beginning of my passion for robotics. More recently, I participated in the 2024 Latin American Innovation Rally, where my team and I won third place. This experience reinforced my ability to work under pressure and develop creative and innovative solutions for real-world problems.",

            // Habilidades
            "skills_title": "Technical Skills",
            "skills_languages": "Programming Languages",
            "skills_backend": "Architecture & Backend",
            "skills_db": "Databases & Infrastructure",
            "skills_emerging": "Emerging Technologies",

            // Proyectos
            "projects_title": "Featured Projects",
            "projects_subtitle": "Selected works in .NET, Python, and Robotics.",
            "repo_btn": "Code",
            "demo_btn": "Documentation",

            // Experience
            "exp_title_main": "Professional Experience (Development)",
            "exp_title_base": "Foundation in Infrastructure & Support",

            "exp_dev_role1": "Backend Developer (.NET / C#)",
            "exp_dev_desc1": "Designed and developed applications using .NET Framework and .NET Core, focusing on scalable Web APIs and microservices. Optimized data persistence and complex queries using SQL Server and Entity Framework Core.",

            "exp_dev_role2": ".NET Developer",
            "exp_dev_desc2": "Built and integrated REST & SOAP APIs using .NET and Java. Provided technical documentation and contributed to software architecture definitions, ensuring best practices and high-quality maintenance of enterprise solutions.",

            "exp_dev_role3": ".NET Developer",
            "exp_dev_desc3": "Built and integrated REST APIs using .NET. Provided technical documentation and contributed to software architecture definitions, ensuring best practices and high-quality maintenance of enterprise solutions.",

            "exp_dev_role4": "Systems Analyst",
            "exp_dev_desc4": "Diagnosed and resolved system failures, managed MySQL databases, and provided L1/L2 technical support. Developed web features using Laravel and performed code analysis to ensure continuous improvement of technological systems.",

            "exp_tech_role": "Technical Support & Hardware/Network Infrastructure Specialist",
            "exp_tech_company": "Various Companies / IT Career Path",
            "exp_tech_date": "Prior to 2019 (~10 years of experience)",
            "exp_tech_intro": "Extensive background in infrastructure, networking, and system maintenance. This technical foundation enhances my backend profile by providing a holistic view for production troubleshooting and efficient software deployment.",

            "exp_tech_cat1_title": "🏢 Corporate Support & IT Management",
            "exp_tech_cat1_s1": "Remote assistance and end-user support for large-scale organizations.",
            "exp_tech_cat1_s2": "IT service management using structured methodologies within Service Manager.",
            "exp_tech_cat1_s3": "Identity and access management (IAM) via Active Directory.",

            "exp_tech_cat2_title": "🔌 Electronics & Hardware Lab",
            "exp_tech_cat2_s1": "Comprehensive diagnosis and repair of L1/L2 Laptops and Desktops.",
            "exp_tech_cat2_s2": "Corrective maintenance for electronic components and audio systems.",
            "exp_tech_cat2_s3": "Advanced interpretation of electronic schematics and circuit repair.",

            "exp_tech_cat3_title": "🌐 Connectivity & Infrastructure",
            "exp_tech_cat3_s1": "Design, installation, and administration of internal network infrastructures.",
            "exp_tech_cat3_s2": "Advanced troubleshooting and diagnostics for data network connectivity.",
            "exp_tech_cat3_s3": "Technical support for commercial audio equipment and background music networks.",

            "exp_tech_cat4_title": "🎓 SENA Partnership (Institutional Support & Co-instruction)",
            "exp_tech_cat4_s1": "Audit, optimization, and repair of technological infrastructure across educational institutions within the partnership.",
            "exp_tech_cat4_s2": "Assistant Instructor Role: Provided technical advisory in computing systems and preventive maintenance.",
            "exp_tech_cat4_s3": "Direct support in the deployment and installation of network projects tailored for the educational sector.",

            // Interest
            "interest_title": "Beyond the Code",
            "interest_description": "When I'm not coding or exploring AI and robotics, I enjoy listening to music and learning Japanese and Mandarin. I am also passionate about video games and astronomy.",

            // Contacto
            "contact_title": "Let's Talk!",
            "contact_subtitle": "Want to work with me or see a project in detail? Write to me.",
            "contact_btn": "Email me",
            "contact_end": "Available for remote work from Colombia."
        }
    }
};

i18n
    .use(LanguageDetector) // Detecta automáticamente el idioma del navegador
    .use(initReactI18next) // Conecta con React
    .init({
        resources,
        fallbackLng: "es",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;