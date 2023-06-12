import styles from './Header.module.css';
import Menu from './HeaderMenu/Menu';

export default function Header() {
    return(
        <header>
            <div className={styles.header__logo}>
                <h1>FRASES</h1>
            </div>
            <div className={styles.header__menu}>
                <Menu/>
            </div>
        </header>
    )
}