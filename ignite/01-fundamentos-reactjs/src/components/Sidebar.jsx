import { Brain } from '@phosphor-icons/react';

import styles from './Sidebar.module.css';
import { Avatar } from './avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>
                <Avatar src="http://github.com/thioliveirx.png" />

                <strong>Thiago Oliveira</strong>
                <span>Economia @ USP</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}