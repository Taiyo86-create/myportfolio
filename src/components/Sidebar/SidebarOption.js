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
        <li>home</li>
        <li>skills</li>
        <li>works</li>
        <li>career</li>
      </ul>
      <GitHubIcon className='githubIcon' onClick={handleGitHubClick} />
    </div>
  )
}

export default SidebarOption