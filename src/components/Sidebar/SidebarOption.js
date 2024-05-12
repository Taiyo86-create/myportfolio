import React from 'react'
import './Sidebar.css'
import GitHubIcon from '@mui/icons-material/GitHub';

const SidebarOption = () => {
  const handleGitHubClick = () => {
    window.open('https://github.com/Taiyo86-create', '_blank');
  };
  return (
    <div className='sidebarOptions'>
      <ul>
        <li>career</li>
        <li>skills</li>
        <li>works</li>
      </ul>
      <GitHubIcon className='githubIcon' onClick={handleGitHubClick} />
    </div>
  )
}

export default SidebarOption