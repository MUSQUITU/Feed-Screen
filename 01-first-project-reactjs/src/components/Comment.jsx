import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
  return(
    <div className={styles.comment}>
      <img src="https://github.com/MUSQUITU.png" alt="foto de perfil" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Yuri Almeida</strong>
              <time title='07 de dezembro de 2022' dateTime='2022-12-07 12:01'>Publicado há 1h</time>

            </div>

            <button title='Deletar comentário'>
              <Trash size={20}/>
            </button>
          </header>

          <p>Muito bom, Parabéns 👏👏 !!!! 💜💜 </p>
        </div>

        <footer>
          <ThumbsUp/>
          Aplaudir <span>20</span>
        </footer>
      </div>
      
    </div>
  )
}