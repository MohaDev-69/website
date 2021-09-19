import Head from 'next/head'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import styles from '../styles/Home.module.scss'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>ItChat | Imagine a safe place</title>
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:title" content="ItChat" />
                <meta property="og:url" content="https://itchat.world" />
                <meta property="og:description" content="" />
            </Head>
            <Header />

            <main className={styles.home}>
                <h1 className={styles.imagine}>
                    Imagine A <span className={styles.safe}>Safe</span> Place
                </h1>

                <img
                    src="https://trymumble.com/assets/img/hero-pic.png"
                    className={styles.screenshot}
                    autofocus
                ></img>
            </main>

            <Footer />
        </div>
    )
}
