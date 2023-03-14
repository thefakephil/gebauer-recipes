import Link from 'next/link';
import styles from './nav.module.css';

export default function Nav() {
    return (
        <div className={styles.navHeader}>
            {/* <div class="logo">Phil G</div> */}
            <ul className={styles.nav}>
                <li className={styles.navLink}><Link href="/">Home</Link></li>
                <li className={styles.navLink}><Link href="/about">About</Link></li>
                <li className={styles.navLink}><Link href="/projects">Projects</Link></li>
                <li className={styles.navLink}><Link href="/post-list">Posts</Link></li>
            </ul>
        </div>
    )
}