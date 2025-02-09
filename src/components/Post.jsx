import { format, formatDistanceToNow } from 'date-fns'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import ptBR from 'date-fns/locale/pt-BR'

export function Post({ author, publishedAt, content }) {
    const publishedDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    {/* <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/89944016?v=4" /> */}
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time 
                    title={publishedDate} 
                    dateTime={publishedAt.toISOString()}>
                        {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(item => {
                    if(item.type === 'paragraph') {
                        return <p>{item.content}</p>
                    } else if(item.type === 'link') {
                        return <p><a href={item.content} target='_blank'>{item.content}</a></p>
                    }
                })}
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe seu comentário'
                />

               <footer>
                    <button type='submit'>Publicar</button>
                </footer> 
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}