import React from 'react'
import {motion} from "framer-motion"
import { useLocation } from 'react-router-dom'
import "./Career.css"
import hokudai from "../../images/hokudai.png"

const Career = () => {
  const location = useLocation();
  return (
    <motion.div
    className='career'
    key={location.pathname}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    >
      <p className='introduce'>
        WEBエンジニア志望の水元太陽です。学歴は北海道大学中退。<br />
        その後携帯販売代理店で勤務した中エンジニア転職を目指しております。<br />
        退職した後テックキャンプというプログラミングスクールでRuby on Railsでアプリを作る学習を致しました。<br />
        現在は独学でReact,firebase,AWSを学習しております。<br />
        以下には詳しい経歴を記載致します。
      </p>
      
      <div className='section'>
        <h4>①北海道大学に入学</h4>
        <div className='sectionContainer'>
          <p>
          高校までは勉強が好きで受験のためかなり勉強をしておりました。<br />
          しかし学力はありましたが、将来どのような仕事をするのかがまだイメージできてなかったため、<br />
          1年時には学部が決まっておらず2年次以降に学部を決められる北海道大学に入学を決意致しました。
          </p>
          <div className='imgArea'>
            <img src={hokudai} className='img' />
            <p>北大農学部の風景</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Career