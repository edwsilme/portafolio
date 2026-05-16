import React from 'react'
import { FaGithub, FaTerminal, FaBook, FaReact, FaJava, FaPython, FaHtml5, FaJsSquare, FaAngular, FaDatabase } from "react-icons/fa";
import { SiDotnet, SiMongodb, SiCplusplus, SiRos, SiUnity, SiCsharp, SiMysql, SiDocker } from "react-icons/si";
import { useTranslation } from 'react-i18next';

// Diccionario extendido de iconos con colores de marca
const techIcons = {
    // Backend & Lenguajes
    '.NET': { icon: <SiDotnet />, color: 'text-purple-600' },
    'C#': { icon: <SiCsharp />, color: 'text-purple-700' },
    'Java': { icon: <FaJava />, color: 'text-red-600' },
    'Python': { icon: <FaPython />, color: 'text-blue-500' },
    'C++': { icon: <SiCplusplus />, color: 'text-blue-600' },

    // Frontend
    'React': { icon: <FaReact />, color: 'text-blue-400' },
    'Angular': { icon: <FaAngular />, color: 'text-red-500' },
    'JavaScript': { icon: <FaJsSquare />, color: 'text-yellow-400' },
    'HTML5': { icon: <FaHtml5 />, color: 'text-orange-500' },

    // Otros
    'MongoDB': { icon: <SiMongodb />, color: 'text-green-500' },
    'Unity': { icon: <SiUnity />, color: 'text-slate-800 dark:text-white' },
    'ROS': { icon: <SiRos />, color: 'text-black dark:text-white' },
    'Robótica': { icon: <FaTerminal />, color: 'text-gray-500' },
    'Docker': { icon: <SiDocker />, color: 'text-blue-400' },
    'MySQL': { icon: <SiMysql />, color: 'text-blue-600' },
    'SQL': { icon: <FaDatabase />, color: 'text-orange-400' },

};

export default function ProjectCard({ project }) {

    const { i18n, t } = useTranslation();

    const currentDescription = i18n.language.startsWith('en')
        ? project.description_en
        : project.description_es;

    return (
        <article className="group flex flex-col md:flex-row gap-8 items-center bg-white dark:bg-gray-900 p-5 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300">

            {/* Contenedor de Imagen */}
            <div className="w-full md:w-2/5 h-64 overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Contenedor de Texto */}
            <div className="w-full md:w-3/5 flex flex-col p-2">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                </h3>

                {/* Mostrar la descripción dinámica */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                    {currentDescription}
                </p>

                {/* Tags con Iconos Dinámicos */}
                <div className="flex gap-2 flex-wrap mb-8">
                    {project.tags.map(t => {
                        const tech = techIcons[t];
                        return (
                            <span key={t} className="flex items-center gap-2 text-[12px] px-3 py-1.5 bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 font-semibold rounded-lg border border-gray-200 dark:border-gray-700/50">
                                {tech && (
                                    <span className={`${tech.color} text-base`}>
                                        {tech.icon}
                                    </span>
                                )}
                                {t}
                            </span>
                        );
                    })}
                </div>

                {/* Enlaces de Acción */}
                <div className="flex gap-6 items-center pt-5 border-t border-gray-100 dark:border-gray-800 mt-auto">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                    >
                        <FaGithub size={20} /> {t('repo_btn')} {/* Traducción del texto "Código" */}
                    </a>

                    {project.demo && project.demo !== '#' && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-sm font-bold text-teal-600 dark:text-teal-400 hover:underline"
                        >
                            <FaBook size={18} /> {t('demo_btn')} {/* Traducción del texto "Documentación" */}
                        </a>
                    )}
                </div>
            </div>
        </article>
    )
}