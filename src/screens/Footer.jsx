import React, {memo} from 'react'
import DropDown from '../components/DropDown'

 function Footer() {
  return (
    <div><DropDown type={'Sitemap'}/></div>
  )
}

export default memo(Footer)