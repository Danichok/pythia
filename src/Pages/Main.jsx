import React, { useState } from 'react'
import Header from '../Components/Header'
import About from '../Components/About'
import Footer from '../Components/Footer'
import FormModal from '../Components/FormModal'
import { useLanguage } from '../Helpers/LanguageContext'

function Main() {
    const [formModal, setFormModal] = useState(false)
    const { languageData } = useLanguage()
    return (
        <div>
            <Header setFormModal={setFormModal} />
            <div className='h-[150px] lg:h-[600px] w-full bg-heroMain bg-center bg-cover bg-no-repeat'>
                <div className='max-w-[300px] lg:max-w-[1160px] m-auto w-full flex items-center h-full px-2'>
                    <div>
                        <p className='leagueSpartan text-[12px] lg:text-[54px] tracking-[2.4px] lg:tracking-[10px] text-white'>{languageData?.homeTitle1}</p>
                        <p className='leagueSpartan text-[12px] lg:text-[54px] tracking-[2.4px] lg:tracking-[10px] text-white'>{languageData?.homeTitle2}</p>
                        <p className='leagueSpartan text-[12px] lg:text-[54px] tracking-[2.4px] lg:tracking-[10px] text-white'>{languageData?.homeTitle3}</p>
                    </div>
                </div>
            </div>
            <About />
            <Footer />
            {
                formModal && <FormModal setFormModal={setFormModal} />
            }
        </div>
    )
}

export default Main
