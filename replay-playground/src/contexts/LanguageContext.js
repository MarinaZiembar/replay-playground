import React, { createContext, useEffect, useState } from 'react';
import {languages} from '../data/languages';


const LanguageContext = createContext();
const { Provider } = LanguageContext;


const LanguageProvider = ({ children }) => {

    const [isDefaultLanguage, setIsDefaultLanguage] = useState(true);
    const [languagePack, setLanguagePack] = useState(languages.spanish);

    useEffect(() => {
        isDefaultLanguage && setLanguagePack(languages.spanish);
        !isDefaultLanguage && setLanguagePack(languages.english);
    },[isDefaultLanguage])

    return (
        <Provider
            value={{
                isDefaultLanguage,
                setIsDefaultLanguage,
                languagePack
            }}
        >
            {children}
        </Provider>
    );
};

export { LanguageContext, LanguageProvider };