import React from 'react'
import { useLanguage } from '../Helpers/LanguageContext'

function Footer() {
    const { languageData } = useLanguage()
    return (
        <div className=' w-full bg-[#545456] flex py-[20px] lg:py-[80px]'>
            <div className='max-w-[1160px] m-auto w-full px-6 lg:px-2'>
                <p className='text-white font-extrabold text-[8px] lg:text-[24px]'>© PYTHIA PLUS LTD</p>
                <p className='text-[#CBCBCC] font-normal text-[8px] lg:text-[24px] tracking-[1.2px] leading-normal'>{languageData?.homeFooterAddress1} <br /> {languageData?.homeFooterAddress2}
                    <br /> {languageData?.homeFooterAddress3}</p>
                <p className='text-[#CBCBCC] font-normal text-[8px] lg:text-[24px] tracking-[1.2px] leading-normal py-[12px] lg:py-[48px]'>{languageData?.homeFooterSubtitle}</p>
                <hr className='h-[0.2px] lg:h-[1px] w-full bg-white mb-[12px] lg:mb-[48px]' />
                <div className='flex justify-between items-center'>
                   <a className='text-[#CBCBCC] font-normal text-[8px] lg:text-[24px] tracking-[1.2px] hover:text-white duration-150' href="#">{languageData?.homeFooterSocialLink1}</a>
                   <a className='text-[#CBCBCC] font-normal text-[8px] lg:text-[24px] tracking-[1.2px] hover:text-white duration-150' href="#">{languageData?.homeFooterSocialLink2}</a>
                   <a className='text-[#CBCBCC] font-normal text-[8px] lg:text-[24px] tracking-[1.2px] hover:text-white duration-150' href="#">{languageData?.homeFooterSocialLink3}</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
