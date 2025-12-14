import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/thioliveirx.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Thiago Oliveira</strong>
                        <span>Economia @ USP</span>
                    </div>
                </div>

                <time title='11 de Maio às 08:13h' datetime="2025-12-12 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala pessoal!</p>
                <p>Desisti de procurar um programar e vibe codar é zero aura</p>
                <p><a href="#">Aceleração</a></p>
                    <a href="">#fodaseoelab</a>{' '}
                    <a href="">#mariimpeachment</a>{' '}
                    <a href="">#z2olab</a>{' '}
               
            </div>

        <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea 
                placeholder="Deixe um comentário"
            />
            <footer>
                <button type="submit">Publicar</button>
            </footer>
        </form>
        </article>
    )
}