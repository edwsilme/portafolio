import React from 'react'
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import useTheme from '../hooks/useTheme'
import LanguageSelector from './LanguageSelector'


export default function Header() {

    const [theme, setTheme] = useTheme()
    const { t } = useTranslation()

    return (
        <header className="fixed w-full top-0 bg-white/80 dark:bg-darkbg/80 backdrop-blur-md z-50">
            <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
                <h1 className="text-2xl font-extrabold">
                    <span className="text-primary">Edward</span> Silva Mejía
                </h1>

                {/* Menú de navegación con traducciones */}
                <nav className="hidden lg:flex gap-6">
                    <a href="#about" className="hover:text-primary transition-colors">{t('nav_about')}</a>
                    <a href="#skills" className="hover:text-primary transition-colors">{t('nav_skills')}</a>
                    <a href="#projects" className="hover:text-primary transition-colors">{t('nav_projects')}</a>
                    <a href="#experience" className="hover:text-primary transition-colors">{t('nav_experience')}</a>
                    <a href="#contact" className="hover:text-primary transition-colors">{t('nav_contact')}</a>
                </nav>

                <div className="flex items-center gap-4">
                    {/* El selector de idioma */}
                    <LanguageSelector />

                    <a href="/cv-edward.pdf" className="btn-cv" title="Descargar CV">CV</a>

                    <button
                        aria-label="Cambiar tema"
                        className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    >
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                </div>
            </div>
        </header>
    )
}