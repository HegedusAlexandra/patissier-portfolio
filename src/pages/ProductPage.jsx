import React from 'react'
import { useTranslation } from 'react-i18next'

export default function ProductPage() {
const {t} = useTranslation()

  return (
    <div className='w-[100%] h-[100vh] bg-blue-200'>{t("ProductPage.TITLE")}</div>
  )
}
