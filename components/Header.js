import { Link } from 'next/link'
import styles from '../styles/Header.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">
                <a className={styles.logo}>
                    ItChat.<span>World</span>
                </a>
            </Link>

            <Link href="/login">
                <a className={styles.button}>Login</a>
            </Link>
        </header>
    )
}
