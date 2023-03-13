import styles from './nav.module.css';

export default function Nav() {
    return (
        <div className={styles.navHeader}>
            {/* <div class="logo">Phil G</div> */}
            <ul class={styles.nav}>
                <li className={styles.navLink}><a href="/">Home</a></li>
                <li className={styles.navLink}><a href="#">About</a></li>
                <li className={styles.navLink}><a href="#">Projects</a></li>
                <li className={styles.navLink}><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}