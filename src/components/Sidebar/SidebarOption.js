import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom';

const SidebarOption = () => {
  return (
    <div className='sidebarOptions'>
      <ul>
        <Link to="/"><li>career</li></Link>
        <Link to="/skills"><li>skills</li></Link>
        <Link to="/works"><li>works</li></Link>
      </ul>
    </div>
  )
}

export default SidebarOption