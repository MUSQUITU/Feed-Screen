import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';


interface CommentsProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}:CommentsProps){
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount((state) => {
      return state + 1
    });
  }

  return(
    <div className={styles.comment}>
      <Avatar 
      hasBorder={false} 
      src="https://github.com/catppuccin.png" 
      alt="foto de perfil" 
      
    />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Yuri Almeida</strong>
              <time title='07 de dezembro de 2022' dateTime='2022-12-07 12:01'>Publicado há 1h</time>

            </div>
            
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
          <ThumbsUp/>
          Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
      
    </div>
  )
}