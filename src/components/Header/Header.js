import React from 'react'
import './Header.css'
import icon from '../../images/img_profile.jpg'
const Header = () => {
  return (
    <div className='icon'>
        <img src={icon} className='myIcon' />
    </div>
  )
}

export default Header