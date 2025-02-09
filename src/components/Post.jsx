import { format, formatDistanceToNow } from 'date-fns'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'


export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([])

    const [newCommentsText, setNewCommentsText] = useState('')

    const publishedDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(event) {
        event.preventDefault();

        setComments([...comments, newCommentsText]);
        setNewCommentsText('')
    }

    function handleNewCommentChange(event) {
        event.target.setCustomValidity('')
        setNewCommentsText(event.target.value)
    }

    function handleNewCommentInvalid(event) {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete)
        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentsText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
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
                        return <p key={item.content} >{item.content}</p>
                    } else if(item.type === 'link') {
                        return <p key={item.content} ><a href={item.content} target='_blank'>{item.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    placeholder='Deixe seu comentário'
                    value={newCommentsText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

               <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer> 
            </form>

            <div className={styles.commentList}>
                {comments.map(item => {
                    return (<Comment 
                        key={item}
                        content={item} 
                        onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}