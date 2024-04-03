import React, {memo} from 'react'
import { useTranslation } from 'react-i18next'

 function Header() {
 const {t} = useTranslation()

  return (
    <div>{t('header.header')}</div>
  )
}

export default memo(Header)