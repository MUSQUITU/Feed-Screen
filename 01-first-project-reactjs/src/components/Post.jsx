import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

export function Post({author, publishedAt}) {
  return(
  
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}  />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title='07 de dezembro de 2022' dateTime='2022-12-07 12:01'>
          {publishedAt.toString()}
          </time>
      </header>

      <div className={styles.content}>
      
      </div>

    <form className={styles.commentForm}>
      <strong>Deixe seu feedback </strong>
      <textarea
        placeholder='Deixe um comentário'
      />
       <footer>
       <button type='submit'>Publicar</button>
        </footer> 
    </form>

    <div className={styles.commentList}>
      <Comment/>
      <Comment/>
    </div>
    </article>
    
  )
    
  
}