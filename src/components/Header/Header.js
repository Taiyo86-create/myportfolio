import React from 'react'
import './Header.css'
import icon from '../../images/img_profile.jpg'
import { useLocation } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = () => {
  const handleGitHubClick = () => {
    window.open('https://github.com/Taiyo86-create', '_blank');
  };
  const location = useLocation();
  const path = location.pathname.substring(1);
  return (
    <div className='header'>
      <div className='headerImg'>
        <img src={icon} className='myIcon' />
      </div>
        <h1><StarIcon />{path || 'career'}</h1>

        <GitHubIcon className='githubIcon' onClick={handleGitHubClick} />
    </div>
  )
}

export default Header