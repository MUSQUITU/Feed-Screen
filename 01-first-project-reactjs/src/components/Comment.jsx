import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({content}){
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/catppuccin.png" alt="foto de perfil" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Yuri Almeida</strong>
              <time title='07 de dezembro de 2022' dateTime='2022-12-07 12:01'>Publicado há 1h</time>

            </div>
            
            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
          <ThumbsUp/>
          Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
      
    </div>
  )
}