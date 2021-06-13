import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>All Airports</title>
        <meta name="description" content="list of all the airports" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>V
        list is here
      </main>

      <footer className={styles.footer}>
        All rights reserved
      </footer>
    </div>
  )
}
