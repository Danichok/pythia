import React from 'react'
import { useState } from 'react'
import './Menu.css'
import lang from '../../lang.json'
import Language from './Language'
import { useLanguage } from '../../Helpers/LanguageContext'

function Menu(props) {

    const { changeLanguage, language } = useLanguage()

    const [menuOpen, setMenuOpen] = useState(false)

    function selectLanguage(lang) {
        changeLanguage(lang)
        setMenuOpen(false)
    }
    
    return (
        <div className='menu top-1 lg:top-[20px] right-1 lg:right-[20px] '>
            <div className="menuSelect " onClick={e => setMenuOpen(!menuOpen)}>
                <p className='selectedLanguageText clash'>{language}</p>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="arrow-drop-down">
                        <path id="Vector" d="M5.25 7.5L9 11.25L12.75 7.5H5.25Z" fill="#394A64" />
                    </g>
                </svg>

            </div>

            {
                menuOpen &&
                <div className="menuOpen">
                    <div className="menuOpenWrapper">
                        { 
                            lang.map((item, index) => (
                                <Language langCode={item.langCode} langName={item.name} countryCode={item.countryCode} key={index} selectedLanguage={props.selectedLanguage} selectLanguage={selectLanguage} />
                            ))
                        }
                    </div>

                </div>
            }
        </div>
    )
}

export default Menu