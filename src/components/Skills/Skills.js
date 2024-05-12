import React from 'react'
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    >
    skills
    </motion.div>
  )
}

export default Skills