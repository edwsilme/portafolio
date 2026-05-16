import React from 'react'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'
import { useTranslation } from 'react-i18next'

export default function Projects() {

    const { t } = useTranslation();

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/40">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 border-l-4 border-primary pl-3">
                    🚧 {t('projects_title')}
                </h2>
                {/* Cambiamos el grid por un div con espacio vertical amplio */}
                <div className="flex flex-col space-y-16">
                    {projects.map(p => <ProjectCard key={p.id} project={p} />)}
                </div>
            </div>
        </section>
    )
}