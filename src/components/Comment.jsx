import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

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
                        <button onClick={handleDeleteComment} title='Deletar Comentrário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>
                        {content}   
                    </p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}