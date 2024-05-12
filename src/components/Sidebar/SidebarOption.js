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
        <Link to="/"><li>career</li></Link>
        <Link to="/skills"><li>skills</li></Link>
        <Link to="/works"><li>works</li></Link>
      </ul>
      <GitHubIcon className='githubIcon' onClick={handleGitHubClick} />
    </div>
  )
}

export default SidebarOption