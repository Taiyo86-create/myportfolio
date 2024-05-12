import React from 'react'
import {motion} from "framer-motion"
import "./Works.css"
import works1 from "../../images/woks1.png"
import works2 from "../../images/woks2.png"
import works3 from "../../images/works3.png"
import works4 from "../../images/works4.png"

const Works = () => {
  const works1Link = () => {
    window.open('https://matchpoke.onrender.com/', '_blank');
  };

  const works3Link = () => {
    window.open('https://twitter-clone-57284.web.app/', '_blank');
  };

  return (
    <motion.div
    className='worksArea'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className='works'>
        <div className='works-box' onClick={works1Link}>
          <img src={works1} className='worksImg' />
          <div className="works-box-inner">
            <h3>オリジナルマッチングアプリ</h3>
            <span>2024.04.10 *Renderでデプロイをしてるため<br />読み込みがかなり遅めです。</span>
          </div>
        </div>

        <div className='works-box'>
          <img src={works2} className='worksImg' />
          <div className="works-box-inner">
            <h3>Furimaアプリ</h3>
            <span>2024.03.31 *Railsで作ったアプリです。<br />未デプロイ</span>
          </div>
        </div>

        <div className='works-box' onClick={works3Link}>
          <img src={works3} className='worksImg' />
          <div className="works-box-inner">
            <h3>Twitterのクローン</h3>
            <span>2024.05.03 *Reactとfirebaseを用いて作りました。</span>
          </div>
        </div>
      </div>

      <div className='works'>
        <div className='works-box'>
          <img src={works4} className='worksImg' />
          <div className="works-box-inner">
            <h3>Lineのクローン</h3>
            <span>2024.04.10 *セキュリティ面に不安があり未デプロイ</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Works