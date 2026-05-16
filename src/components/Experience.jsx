import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Experience() {

    const { t } = useTranslation();

    const devExperience = [
        {
            role: t('exp_dev_role1'),
            company: 'Plataforma Tecnológica',
            date: 'sep. 2025 - dic. 2025',
            desc: t('exp_dev_desc1')
        },
        {
            role: t('exp_dev_role2'),
            company: 'Fisla Tecnología SAS',
            date: 'abr. 2022 - mar. 2025',
            desc: t('exp_dev_desc2')
        },
        {
            role: t('exp_dev_role3'),
            company: 'La Vital',
            date: 'jul. 2021 - sept. 2021',
            desc: t('exp_dev_desc3')
        },
        {
            role: t('exp_dev_role4'),
            company: 'Blaucast Media SAS',
            date: 'jul. 2019 - nov. 2020 / nov. 2021 - mar. 2022',
            desc: t('exp_dev_desc4')
        }
    ]

    const techSupportExperience = [
        {
            role: t('exp_tech_role'),
            company: t('exp_tech_company'),
            date: t('exp_tech_date'),
            intro: t('exp_tech_intro'),
            categories: [
                {
                    title: t('exp_tech_cat1_title'),
                    skills: [
                        t('exp_tech_cat1_s1'),
                        t('exp_tech_cat1_s2'),
                        t('exp_tech_cat1_s3')
                    ]
                },
                {
                    title: t('exp_tech_cat2_title'),
                    skills: [
                        t('exp_tech_cat2_s1'),
                        t('exp_tech_cat2_s2'),
                        t('exp_tech_cat2_s3')
                    ]
                },
                {
                    title: t('exp_tech_cat3_title'),
                    skills: [
                        t('exp_tech_cat3_s1'),
                        t('exp_tech_cat3_s2'),
                        t('exp_tech_cat3_s3')
                    ]
                },
                {
                    title: t('exp_tech_cat4_title'),
                    skills: [
                        t('exp_tech_cat4_s1'),
                        t('exp_tech_cat4_s2'),
                        t('exp_tech_cat4_s3')
                    ]
                }
            ]
        }
    ]

    return (
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/40">
            <div className="max-w-6xl mx-auto px-6">

                {/* TRAYECTORIA PRINCIPAL */}
                <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-3 text-gray-900 dark:text-white">
                    💼 {t('exp_title_main')}
                </h2>
                <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-4 md:ml-6 space-y-8 mb-16">
                    {devExperience.map((it, index) => (
                        <div key={`dev-${index}`} className="relative pl-6 md:pl-8">
                            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1.5 border-4 border-white dark:border-gray-800"></div>
                            <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                                <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">{it.date}</span>
                                <h3 className="font-bold text-lg mt-1 text-gray-900 dark:text-white">
                                    {it.role} — <span className="text-primary font-semibold">{it.company}</span>
                                </h3>
                                <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{it.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* TRAYECTORIA ADICIONAL EN CATEGORÍAS */}
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 pl-3">
                    🛠️ {t('exp_title_base')}
                </h3>
                <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-4 md:ml-6 space-y-8">
                    {techSupportExperience.map((it, index) => (
                        <div key={`tech-${index}`} className="relative pl-6 md:pl-8">
                            <div className="absolute w-4 h-4 bg-gray-400 rounded-full -left-[9px] top-1.5 border-4 border-white dark:border-gray-800"></div>
                            <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                                <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{it.date}</span>
                                <h4 className="font-bold text-lg mt-1 text-gray-900 dark:text-white">
                                    {it.role} — <span className="text-gray-500 dark:text-gray-400 font-semibold">{it.company}</span>
                                </h4>

                                <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
                                    {it.intro}
                                </p>

                                {/* Renderizado por bloques/categorías utilizando Grid en pantallas medianas */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {it.categories.map((cat, cIndex) => (
                                        <div key={cIndex} className="p-4 rounded-xl bg-gray-50 dark:bg-gray-950/40 border border-gray-100 dark:border-gray-800/60">
                                            <h5 className="font-semibold text-sm text-gray-800 dark:text-gray-200 mb-3 uppercase tracking-wider">
                                                {cat.title}
                                            </h5>
                                            <ul className="space-y-2">
                                                {cat.skills.map((skill, sIndex) => (
                                                    <li key={sIndex} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300 leading-normal">
                                                        <span className="text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-0.5">✔️</span>
                                                        <span>{skill}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}