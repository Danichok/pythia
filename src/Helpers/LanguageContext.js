import React, { createContext, useState, useContext, useEffect } from 'react';
import API from './API.js';
import langs from './langs.json';

// Create a LanguageContext
const LanguageContext = createContext();

// LanguageProvider component
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
    const [languageData, setLanguageData] = useState({});

    useEffect(() => {
        const storedLanguage = localStorage.getItem('language');

        if (storedLanguage === null) {
            API.getUserCountry()
                .then((result) => {
                    let userLang;
                    switch (result) {
                        case 'EN':
                            userLang = 'en';
                            break;
                        case 'ES':
                            userLang = 'es';
                            break;
                        case 'BR':
                        case 'PT':
                            userLang = 'pt';
                            break;
                        default:
                            userLang = 'en';
                            break;
                    }
                    setLanguage(userLang);
                    setLanguageData(langs[userLang]);
                    localStorage.setItem('language', userLang);
                })
                .catch((error) => {
                    console.error('Error fetching user country:', error);
                });
        } else {
            setLanguage(storedLanguage);
            setLanguageData(langs[storedLanguage] || langs.en);
        }
    }, []);

    useEffect(() => {
        setLanguageData(langs[language] || langs.en);
    }, [language]);

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, languageData }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook to use the LanguageContext
export const useLanguage = () => {
    return useContext(LanguageContext);
};

export default LanguageProvider;
