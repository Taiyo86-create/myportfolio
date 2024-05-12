import React from 'react'
import {motion} from "framer-motion"
import { useLocation } from 'react-router-dom'
const Career = () => {
  const location = useLocation();
  return (
    <motion.div
    key={location.pathname}
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      aaaaa
      
    </motion.div>
  )
}

export default Career