import React from 'react'
import { motion } from "framer-motion";
import "./Skills.css"
import ComputerIcon from '@mui/icons-material/Computer';
import DiamondIcon from '@mui/icons-material/Diamond';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { Twitter } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AutoModeIcon from '@mui/icons-material/AutoMode';


const Skills = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    >
    <div className='skillArea'>
      <div className='skillBox color-a'>
        <h2><ComputerIcon />WEB</h2>
        <StarIcon /><StarIcon /><StarIcon />
        <p>HTML/CSS/Javascript/Jqueryを使ってのWEBサイト作成ができます。</p>
      </div>

      <div className='skillBox color-b'>
        <h2><DiamondIcon />Ruby on Rails</h2>
        <StarIcon /><StarIcon /><StarBorderIcon />
        <p>Railsを用いたアプリ開発、バックエンドの構築ができます。</p>
      </div>

      <div className='skillBox color-c'>
        <h2><HourglassEmptyIcon />React</h2>
        <StarIcon /><StarIcon /><StarBorderIcon />
        <p>
          Reactを用いたフロント開発ができます。<br />
          Udemyの講座や公式ドキュメントを読みながら勉強を進めております。
        </p>
      </div>
    </div>

    <div className='skillArea'>
      <div className='skillBox color-d'>
        <h2><Twitter />Firebase</h2>
        <StarIcon /><StarIcon /><StarBorderIcon />
        <p>
          Firebaseを用いてバックエンド構築ができます。<br />
          制作物のLINEクローンやTwitterクローンはFirebaseを利用しております。
        </p>
      </div>

      <div className='skillBox color-e'>
        <h2><AutoModeIcon />AWS</h2>
        <StarIcon /><StarBorderIcon /><StarBorderIcon />
        <p>
          EC2のインスタンスを用いてそこでアプリを起動させることができます。<br />
          ただしそのくらいしか経験がないので他より練度は浅めです。
        </p>
      </div>
    </div>
    </motion.div>
  )
}

export default Skills