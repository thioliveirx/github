import styles from './Header.module.css'
import neuLogo from '../assets/neu-logo.svg';

console.log(igniteLogo);

export function Hearder() {
    return(
        <hearder className={styles.header}>
        <img src={neuLogo} alt="Logotipo" />
        
        </hearder>
    )
}