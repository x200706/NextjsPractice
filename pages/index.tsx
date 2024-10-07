import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

const Home: NextPage = () => {
  // 使用 useState 來控制是否顯示 iframe
  const [showIframe, setShowIframe] = useState(false)
  
  function ohYeah () {
    console.log('喔耶')
    setShowIframe(false) 
  }
  function manBo () {
    console.log('曼波～曼波～慶典曼波～')
    setShowIframe(true) 
  }
  return (
    <main>
    <button className={styles.manbo} onClick={manBo}>曼波</button> <button className={styles.ohyeah} onClick={ohYeah}>喔耶</button>
    <br/> 
    {showIframe && (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Zb2IKZF56WI?si=X8STF6idvq0ESGMK"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </main>
  )
}

export default Home
