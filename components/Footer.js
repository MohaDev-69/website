import { Github, Reddit, Twitter } from '@styled-icons/simple-icons'
import styles from '../styles/Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.socials}>
                <a href="https://github.com/Itchat-app">
                    <Github />
                </a>
                <a href="#">
                    <Reddit />
                </a>
                <a href="#">
                    <Twitter />
                </a>
            </div>

            <div className={styles.links}>
                <div className={styles.column}>
                    <span>Developers</span>
                    <a href="#">Documentation</a>
                    <a href="#">Contribute</a>
                </div>

                <div className={styles.column}>
                    <span>Team</span>
                    <a href="#">About us</a>
                    <a href="mailto:support@itchat.world">Email</a>
                </div>

                <div className={styles.column}>
                    <span>Lagels</span>
                    <a href="/tos">Terms of service</a>
                    <a href="/privacy">Privacy policy</a>
                </div>
            </div>
        </footer>
    )
}
