import React from 'react'
import './Sidebar.css'
import { motion } from 'framer-motion';
import SidebarOption from './SidebarOption';

const Sidebar = () => {
  return (
    <div>
    <motion.div
      initial={{ x: -300 }} // 初期状態では画面外に移動
      whileHover={{ x: 0 }} // ホバー時に画面内に移動
      className="sidebar"
    >
    <SidebarOption />
    </motion.div>
    </div>
  )
}

export default Sidebar