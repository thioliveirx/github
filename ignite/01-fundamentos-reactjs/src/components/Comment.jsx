import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './avatar';

export function Comment() {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="http://github.com/thioliveirx.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thiago Oliveira</strong>
                                <time title='11 de Maio às 08:13h' dateTime="2025-12-12 08:13:30">Cerca de 2h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom, parabéns!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}