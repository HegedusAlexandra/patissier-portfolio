import React, {memo} from 'react'
import DropDown from '../components/DropDown'
import ContactForm from '../components/ContactForm'

 function Footer() {
  return (
    <div><ContactForm/><DropDown type={'Sitemap'}/></div>
  )
}

export default memo(Footer)