import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg';

console.log(igniteLogo);

export function Hearder() {
    return(
        <hearder className={styles.header}>
        <img src={igniteLogo} alt="Logotipo do ignite"/>
        
        </hearder>
    )
}