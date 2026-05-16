import React, { useEffect, useState } from 'react'
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import fotoPerfil from '../assets/image/Perfil_1.png';

export default function Hero() {
    const [i, setI] = useState(0)
    const [j, setJ] = useState(0)
    const [isDeleting, setDeleting] = useState(false)
    const [text, setText] = useState('')
    const [pause, setPause] = useState(false)
    const { t } = useTranslation()

    const lines = [
        t('hero_line1'),
        t('hero_line2'),
        t('hero_line3')
    ]

    useEffect(() => {
        const currentLine = lines[i]

        const chars = Array.from(currentLine)

        const speed = isDeleting ? 40 : 80
        const timeoutValue = pause ? 2000 : speed

        const handle = setTimeout(() => {
            setPause(false)

            if (!isDeleting) {

                setText(chars.slice(0, j + 1).join(''))
                if (j < chars.length - 1) {
                    setJ(j + 1)
                } else {
                    setPause(true)
                    setDeleting(true)
                }
            } else {
                setText(chars.slice(0, j).join(''))
                if (j > 0) {
                    setJ(j - 1)
                } else {
                    setDeleting(false)
                    setI((i + 1) % lines.length)
                    setJ(0)
                }
            }
        }, timeoutValue)

        return () => clearTimeout(handle)
    }, [i, j, isDeleting, pause])

    return (
        <section className="h-screen flex flex-col items-center justify-center text-center px-6 bg-hero text-white">
            <img src={fotoPerfil} alt="perfil" className="w-40 h-40 rounded-full shadow-lg border-4 border-primary mb-6" />
            <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
                {t('hero_hello')} <span className="bg-white/20 px-2 py-1 rounded-md text-primary">Edward</span>
            </h2>

            {/* Contenedor con altura mínima para evitar que los iconos "salten" */}
            <div className="min-h-[1.5em] mb-8">
                <p className="text-xl font-medium typing-cursor inline">
                    {text}
                </p>
            </div>

            <div className="flex items-center gap-6 text-3xl">
                <a href="https://www.linkedin.com/in/eesilvamejia" className="hover:text-primary transition-colors"><FaLinkedin /></a>
                <a href="https://github.com/edwsilme" className="hover:text-primary transition-colors"><FaGithub /></a>
                <a href="https://www.youtube.com/@eddwsilmeingenieria7227" className="hover:text-primary transition-colors"><FaYoutube /></a>
            </div>
        </section>
    )
}