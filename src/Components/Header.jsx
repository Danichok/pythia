import React from 'react'
import logo from '../images/logo.svg'
import { useLanguage } from '../Helpers/LanguageContext'

function Header({ setFormModal }) {
    const { languageData } = useLanguage()
    return (
        <div className='h-[70px] lg:h-[100px] w-full bg-[#545456] flex'>
            <div className='max-w-[1160px] m-auto w-full flex justify-between px-2'>
                <img className='w-[120px] lg:w-[290px]' src={logo} alt="logo" />
                <p onClick={e => setFormModal(true)} className='text-[14px] lg:text-[20px] font-bold text-white hover:text-[#E67B26] duration-150 cursor-pointer'>{languageData?.homeHeaderLink}</p>
            </div>
        </div>
    )
}

export default Header
