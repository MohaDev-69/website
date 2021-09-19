import styles from '../styles/Header.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <a href="/" className={styles.logo}>
                ItChat.<span>World</span>
            </a>
            <a href="/login" className={styles.button}>
                Login
            </a>
        </header>
    )
}
