import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700">
            <button
                onClick={() => changeLanguage('es')}
                className={`text-xs font-bold transition-colors ${i18n.language.startsWith('es') ? 'text-teal-500' : 'text-gray-400 hover:text-gray-600'}`}
            >
                ES
            </button>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <button
                onClick={() => changeLanguage('en')}
                className={`text-xs font-bold transition-colors ${i18n.language.startsWith('en') ? 'text-teal-500' : 'text-gray-400 hover:text-gray-600'}`}
            >
                EN
            </button>
        </div>
    );
}