import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  function ohYeah () {
    console.log('喔耶')
  }
  function manBo () {
    console.log('曼波～曼波～慶典曼波～')
  }
  return (
    <main>
    <button className={styles.manbo} onClick={manBo}>曼波</button> <button className={styles.ohyeah} onClick={ohYeah}>喔耶</button> 
    </main>
  )
}

export default Home
