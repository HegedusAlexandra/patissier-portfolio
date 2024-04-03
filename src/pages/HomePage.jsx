
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function HomePage() {
  const {t} = useTranslation()
  
  return (
    <div className='w-[100%] h-[100vh] bg-red-300'>
      {t('HomePage.TITLE')}
    </div>
  )
}

