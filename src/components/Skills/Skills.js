import React from 'react'
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }} 
    >
    skills
    </motion.div>
  )
}

export default Skills