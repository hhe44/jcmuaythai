import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Jersey City Muay Thai</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <footer className={styles.footer}>
      </footer>

    </div>
  )
}
