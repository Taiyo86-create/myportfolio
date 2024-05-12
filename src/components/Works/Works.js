import React from 'react'
import {motion} from "framer-motion"

const Works = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }} // 初期状態で不透明度を0に設定
    animate={{ opacity: 1 }} // アニメーションで不透明度を1に設定
    transition={{ duration: 0.5 }} // アニメーションの期間を設定
    >
      Works
    </motion.div>
  )
}

export default Works