import React from 'react'
import { useTranslation } from 'react-i18next'

export default function About() {

    const { t } = useTranslation();

    return (
        <section className="max-w-6xl mx-auto py-20 px-6" id="about">
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-primary pl-3">
                {t('about_title')}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('about_p1')}
            </p>

            <p className="text-gray-600 dark:text-gray-300">
                {t('about_p2')}
            </p>
        </section>
    )
}