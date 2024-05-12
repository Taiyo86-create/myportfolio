import React from 'react'
import {motion} from "framer-motion"
import { useLocation } from 'react-router-dom'
import "./Career.css"
import myImg from "../../images/myimg.png"

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
        WEBエンジニア志望の水元太陽と申します。<br />
        最終学歴は北海道大学中退。<br />
        職務経歴としては携帯販売代理店へ入社し、現在はエンジニア転職を目指しております。<br />
        具体的にはテックキャンプというプログラミングスクールにてRuby on Railsでアプリを作る学習を行い、<br />
        React,firebase,AWSを学習しております。<br />
        以下に簡潔に記載させていただきます。
      </p>
      
      <div className='section'>
        <h4>① 北海道大学への入学</h4>
          <p>
          勉強が好きで受験のため毎日8時間勉強しておりました。<br />
          しかし、学力はありましたが、将来どのような仕事をするのかがまだイメージできておらず、<br />
          1年時ではなく2年以降に学部を決められる北海道大学への入学を決意しました。
          </p>
      </div>
      <div className='section'>
        <h4>② 北海道大学を中退</h4>
          <p>
            1年間情報の授業を受け、プログラミングやofficeにのめり込み、<br />
            プログラミングを学びたいと決意し、情報エレクトロニクス学部を目指しました。<br />
            しかし学部の移行は基本成績によって決まり、私の成績では1年間の競争率が高いその学部に移行することができませんでした。<br />
            プログラミング学習を諦めきれなかった私は留年を決意し、もう一度学習に励みましたが惜しくも成績が足りませんでした。<br />
            留年を許してもらう代わりにもし移行できなかった場合はすぐに就職し留年費用を返すという約束を親としており私は中退を受け入れました。
          </p>
      </div>
      
      <div className='section'>
        <h4>③ 携帯販売代理店に入社</h4>
          <p>
            親に支払う留年費用をすぐに稼げるかつプログラミングの勉強代を貯めることができる会社を探している中、<br />
            携帯ショップに勤めている友人の勧めもあり入社を決意致しました。
          </p>
      </div>

      <div className='section'>
        <h4>④ 年間MVPを受賞</h4>
          <div className='sectionContainer'>
          <p>
            やるからには全力でやりたかった私は年間MVPという表彰を目指しました。<br />
            毎朝礼前に今日何の商材が不足しているか、何を販売すればポイントを多く獲得することができるかの確認を徹底し<br />
            結果2年めに年間MVPを受賞し、店舗からも信頼され自分だけではなく新人の教育と実績管理を任せていただけるようになりました。
          </p>

          <div className='imgArea'>
            <img src={myImg} className='img' />
            <p>
              年間MVPを受賞した時の私です。<br />
              個人情報保護のため<br />
              一部切り取っております。
            </p>
          </div>
          </div>
      </div>

      <div className='section'>
        <h4>⑤ エンジニアの道に進む決意</h4>
          <p>
            そこからしばらく仕事にのめり込みましたが、エンジニアになりたいと思う転機が訪れました。<br />
            3つほどございます。<br />
            ①未経験からCAPCOM様に入社した後輩を見たため<br />
            かなりプログラミングができる後輩で、仕事の傍らプログラミングを勉強しており仕事中のパソコン操作にも技術が垣間見えるほどの人間でした。<br />
            ②仕事の傍らHTML,CSS,JavaScriptの基礎が学べるスクールを受講し夜も眠れなくなるほど熱中できたこと。<br />
            ③自分はプログラミングがかなり好きで楽しんでできると再確認できたこと。<br/>
            会社が導入したWEBアプリケーションに興味を持ってこれまでのスクールでの勉強のみだと、
            WEBサイトを作ることができてもその先どの道に進むか不明瞭でした。<br/>
            その中でアプリケーションに興味を惹かれ、自分もアプリケーションを作りたいと思い、
            そこからテックキャンプの受講を決意し現在に至ります。   
          </p>
      </div>

      <p className='introduce'>
      長文となりましたが、お読み頂き誠にありがとうございます。
      </p>
      
    </motion.div>
  )
}

export default Career