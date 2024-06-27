import React from 'react'
import './Language.css'
import "/node_modules/flag-icons/css/flag-icons.min.css";

function Language({ langCode, langName, selectedLanguage, countryCode, selectLanguage }) {
    
    return (
        <div className={`languageBlock ${selectedLanguage === langCode ? 'selectedLanguage' : ''}`} onClick={e => selectLanguage(langCode)}>
            <p>{langCode}</p>
            <img src={`https://flagicons.lipis.dev/flags/4x3/${countryCode.toLowerCase()}.svg`} alt="Image" />
            <p>{langName}</p>
        </div>
    )
}

export default Language