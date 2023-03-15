import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return(
  
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/MUSQUITU.png"  />
          <div className={styles.authorInfo}>
            <strong>Camila Teixeira</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='07 de dezembro de 2022' dateTime='2022-12-07 12:01'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
      <p>Fala galeraa 👋</p>
      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
      <p>👉<a href="https://www.instagram.com/camis.js" target='_blank'>camis.js </a></p>
      <p> <a href="##">#novoprojeto</a> {' '}
      <a href='##'> #nlw </a>{' '}
      <a href='##'>#rocketseat</a></p>
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