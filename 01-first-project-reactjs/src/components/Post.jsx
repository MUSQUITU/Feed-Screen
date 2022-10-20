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

        <time></time>
      </header>
    </article>
    
  )
    
  
}