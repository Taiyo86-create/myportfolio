import React from 'react'
import './Sidebar.css'
import { motion } from 'framer-motion';
import SidebarOption from './SidebarOption';

const Sidebar = () => {
  return (
    <div className='sideBar'>
      <SidebarOption />
    </div>
  )
}

export default Sidebar