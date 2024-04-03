import React, {memo} from 'react'
import { useTranslation } from 'react-i18next'
import DropDown from '../components/DropDown'

 function Header() {
 const {t} = useTranslation()

  return (
    <div><DropDown type={'Language'}/></div>
  )
}

export default memo(Header)