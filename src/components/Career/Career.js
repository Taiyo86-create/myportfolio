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
    transition={{ duration: 0.7, delay: 0.2 }}
    >
      aaaaa
      
    </motion.div>
  )
}

export default Career