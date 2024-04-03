import React, {memo} from 'react'
import DropDown from '../components/DropDown'
import ContactForm from '../components/ContactForm'

 function Footer() {
  return (
    <section><ContactForm/><DropDown type={'Sitemap'}/></section>
  )
}

export default memo(Footer)