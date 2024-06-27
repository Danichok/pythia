import React, { useState } from 'react'
import logo from '../images/logo.svg'
import { useLanguage } from '../Helpers/LanguageContext'

function FormModal({ setFormModal }) {
    const { languageData } = useLanguage()

    const stopPropagation = (e) => {
        e.stopPropagation();
    };
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')

    return (
        <div onClick={e => setFormModal(false)} className=" top-0 z-20 fixed h-full w-screen bg-black bg-opacity-40 p-4 flex">
            <div onClick={stopPropagation} className="relative m-auto max-w-[350px] w-full  bg-[#545456] rounded-lg p-6">
                <div className='flex justify-end mb-4'>
                    <svg onClick={e => setFormModal(false)} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path d="M10.2643 1.76936L9.23058 0.735596L5.13217 4.834L1.03377 0.735596L0 1.76936L4.0984 5.86777L0 9.96617L1.03377 10.9999L5.13217 6.90153L9.23058 10.9999L10.2643 9.96617L6.16594 5.86777L10.2643 1.76936Z" fill="black" />
                    </svg>
                </div>
                <img className='w-full' src={logo} alt="logo" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} className='w-full border-2 border-[#E67B26] rounded-xl bg-white p-4 mt-4' placeholder={languageData?.homeFormModal1} type="text" />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className='w-full border-2 border-[#E67B26] rounded-xl bg-white p-4 mt-4 resize-none h-[120px]' placeholder={languageData?.homeFormModal2} /> 
                <button className='w-full bg-[#E67B26] text-white font-bold rounded-xl p-4 mt-4'>{languageData?.homeFormModalBtn}</button>
            </div>
        </div>
    )
}

export default FormModal
