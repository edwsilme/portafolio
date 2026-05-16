import React from 'react'
import { FaCode, FaDatabase, FaServer, FaRobot } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

export default function Skills() {

    const { t } = useTranslation();

    const skillCategories = [
        {
            title: t('skills_languages'),
            icon: <FaCode className="text-primary text-xl" />,
            skills: ['C#', '.NET', 'Python', 'Java', 'SQL']
        },
        {
            title: t('skills_backend'),
            icon: <FaServer className="text-teal-500 text-xl" />,
            skills: ['Web APIs / REST', 'Clean Architecture', 'Docker', 'AWS', 'Azure (AZ-900 en proceso)']
        },
        {
            title: t('skills_db'),
            icon: <FaDatabase className="text-blue-500 text-xl" />,
            skills: ['SQL Server', 'PostgreSQL', 'Soporte L1/L2', 'Administración de Redes']
        },
        {
            title: t('skills_emerging'),
            icon: <FaRobot className="text-purple-500 text-xl" />,
            skills: ['Robótica Autónoma', 'Inteligencia Artificial', 'Integración de Hardware']
        }
    ]

    return (
        <section id="skills" className="py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-3">🧠 {t('skills_title')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map(cat => (
                        <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800" key={cat.title}>
                            <div className="flex items-center gap-3 mb-4">
                                {cat.icon}
                                <h3 className="font-bold text-lg">{cat.title}</h3>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                {cat.skills.map(s => (
                                    <span key={s} className="text-sm px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}