import React from 'react'
import './Header.css'
import icon from '../../images/img_profile.jpg'
import { useLocation } from 'react-router-dom';
const Header = () => {
  const location = useLocation();
  const path = location.pathname.substring(1);
  return (
    <div className='header'>
        <img src={icon} className='myIcon' />
        <h1>{path || 'career'}</h1>
    </div>
  )
}

export default Header