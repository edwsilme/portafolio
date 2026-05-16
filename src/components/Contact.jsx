import React from 'react'
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { useTranslation } from 'react-i18next'


export default function Contact() {

    const { t } = useTranslation();

    return (
        <section id="contact" className="py-20 bg-[#0f172a]">
            <div className="max-w-3xl mx-auto px-6 text-center">
                {/* Icono animado o Emoji */}
                <div className="inline-block p-4 bg-teal-500/10 rounded-full mb-6">
                    <span className="text-4xl">📩</span>
                </div>

                <h2 className="text-4xl font-bold text-white mb-4">
                    {t('contact_title')}
                </h2>

                <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                    {t('contact_subtitle')}
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    {/* Email */}
                    <a
                        href="mailto:edw.Develop@outlook.com"
                        className="flex items-center gap-3 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-2xl transition-all shadow-lg shadow-teal-500/20"
                    >
                        <FaEnvelope size={20} /> {t('contact_btn')}
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com//in/eesilvamejia/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-600/20"
                    >
                        <FaLinkedin size={20} /> LinkedIn
                    </a>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/573156315234"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl transition-all shadow-lg shadow-emerald-500/20"
                    >
                        <FaWhatsapp size={20} /> WhatsApp
                    </a>
                </div>

                {/* Un toque de "disponibilidad" */}
                <p className="mt-12 text-sm text-slate-500 italic">
                    • {t('contact_end')}
                </p>
            </div>
        </section>
    )
}
