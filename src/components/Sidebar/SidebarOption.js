import React from 'react'
import './Sidebar.css'
import GitHubIcon from '@mui/icons-material/GitHub';

const SidebarOption = () => {
  return (
    <div className='sidebarOptions'>
      <ul>
        <li>home</li>
        <li>skills</li>
        <li>works</li>
        <li>career</li>
      </ul>
      <GitHubIcon  className='githubIcon'/>
    </div>
  )
}

export default SidebarOption