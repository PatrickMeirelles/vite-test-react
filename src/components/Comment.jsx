import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/diego3g.png'/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Patrick Meirelles</strong>
                            <time title="17 de Novembro às 08:17h" dateTime="2024-11-17 08:17:20">Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar Comentrário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>
                        Muito bom, Parabénsss 👏👏
                    </p>
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