import React from 'react'
import './Sidebar.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

const SidebarOption = () => {
  const handleGitHubClick = () => {
    window.open('https://github.com/Taiyo86-create', '_blank');
  };
  return (
    <div className='sidebarOptions'>
      <ul>
        <li><Link to="/">career</Link></li>
        <li><Link to="/skills">skills</Link></li>
        <li><Link to="/works">works</Link></li>
      </ul>
      <GitHubIcon className='githubIcon' onClick={handleGitHubClick} />
    </div>
  )
}

export default SidebarOption