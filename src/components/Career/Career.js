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
      <div className='section'>
        <h4>②北海道大学を中退</h4>
        <div className='sectionContainer'>
          <p>
            1年次に情報の授業を受け、プログラミングやofficeにのめり込み、<br />
            プログラミングを学習したいと決意致し、情報エレクトロニクス学部を目指しました。<br />
            しかし学部の移行は基本成績によって決まり、1年目の競争率が高くその学部に移行することができませんでした。<br />
            プログラミング学習を諦めきれなかった私は留年を決意し、再度学習に励みましたが惜しくも成績が足りず2年目も以降がかないませんでした。<br />
            留年を許してもらう代わりにもし移行できなかった場合はすぐに就職し留年費用を返すという約束を親としていた私は中退を受け入れました。
          </p>
        </div>
      </div>
      
      <div className='section'>
        <h4>携帯販売代理店に入社</h4>
        <div className='sectionContainer'>
          <p>
            
          </p>
        </div>
      </div>
      
    </motion.div>
  )
}

export default Career