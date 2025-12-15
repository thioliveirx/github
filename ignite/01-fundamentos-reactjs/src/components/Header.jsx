import styles from './Header.module.css'
import neuLogo from '../assets/neu-logo.svg';

export function Header() {
    return(
        <header className={styles.header}>
            <img src={neuLogo} alt="Logotipo" />
        </header>
    )
}