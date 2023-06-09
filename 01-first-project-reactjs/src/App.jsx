import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

import './global.css'


// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/MUSQUITU.png',
      name: 'Camila Teixeira',
      role: 'Web Developer'
    }, 
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content:'👉 www.instagram.com/camis.js'}
    ],
    publishedAt: new Date('2023-05-01 20:45:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Manogel.png',
      name: 'Manoel Gomes',
      role: 'Full Stack'
    }, 
    content: [
      { type: 'paragraph', content: 'Buenos dias 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content:'👉 www.instagram.com/camis.js'}
    ],
    publishedAt: new Date('2023-05-11 20:45:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/prsclast.png',
      name: 'Priscila',
      role: 'Web Developer'
    }, 
    content: [
      { type: 'paragraph', content: 'Inhaí 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content:'👉 www.instagram.com/camis.js'}
    ],
    publishedAt: new Date('2023-05-12 20:45:00'),
  },
]

// Iteração é o processo chamado na programação de repetição de uma ou mais ações.

export function App() {
  return (
   <div>
    <Header />

    <div className={styles.wrapper}> 
      <Sidebar />
      <main>
        {posts.map(post => {
          return (
          <Post
            author ={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />)
        })}
      </main>

    </div>
   </div>
  )
}


