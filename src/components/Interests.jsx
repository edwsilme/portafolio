import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Interest() {
    const { t } = useTranslation();

    return (
        <section className="max-w-5xl mx-auto py-20 px-6">
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-primary pl-3">
                🪐 {t('interest_title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
                {t('interest_description')}
            </p>
        </section>
    )
}