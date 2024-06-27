import React from 'react'
import about from '../images/about.png'
import { useLanguage } from '../Helpers/LanguageContext'

function About() {
    const { languageData } = useLanguage()
    return (
        <div>
            <div className='p-6 lg:h-[300px] w-full bg-[#545456] flex'>
                <div className='max-w-[1160px] m-auto w-full flex justify-between lg:px-2'>
                    <p className='text-[12px] lg:text-[29px] font-medium tracking-[0.6px] lg:tracking-[1.45px] leading-normal text-white border-l-2 border-[#E67B26] pl-2'>{languageData?.homeAbout}</p>
                </div>
            </div>
            <div className='w-full border-t-4 border-b-4 border-[#E67B26] lg:flex justify-between items-center'>
                <img className='w-full object-cover lg:w-[50%] h-[120px] lg:h-[unset]' src={about} alt="about" />
                <div className='lg:p-[100px]'>
                    <p className='font-medium text-[12px] lg:text-[29px] p-2 tracking-[0.6px] lg:tracking-[1.45px]'>{languageData?.homeAbout2}</p>
                </div>
            </div>
        </div>
    )
}

export default About
