import React from 'react'
import {motion} from "framer-motion"

const Works = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    >
      Works
    </motion.div>
  )
}

export default Works