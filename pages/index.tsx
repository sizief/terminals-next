import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/common/firstPageLayout'

export default function Home() {
  const title = (): string => 'Terminal App'
  return (
    <div className={styles.container}>
      <Head>
        <title>{title()}</title>
        <meta name="description" content="find a companion to spend time on airport terminal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://terminalsapp.com">Terminals</a>
        </h1>

        <div className={styles.grid}>
          <Link href='airports'>
            <a className={styles.card}>
              <h2>Find someone</h2>
              <p>See who is online where</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        All rights reserved
      </footer>
    </div>
  )
}

Home.layout = (page) => <Layout>{page}</Layout>
