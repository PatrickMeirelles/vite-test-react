import { Header } from "./components/Header"
import { Post } from "./components/Post"
import "./global.css"
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    }, 
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'https://github.com/diego3g?tab=repositories' }
    ],
    publishedAt: new Date('2025-02-05 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/PatrickMeirelles.png',
      name: 'Patrick Meirelles',
      role: 'Software Engineer'
    }, 
    content: [
      { type: 'paragraph', content: 'Opa Galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um bingo online, chega mais!!!'},
      { type: 'link', content: 'https://bingo-game-ten.vercel.app/' }
    ],
    publishedAt: new Date('2025-02-04 18:43:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/lucasmontano.png',
      name: 'Lucas Montano',
      role: 'CTO Disney+'
    }, 
    content: [
      { type: 'paragraph', content: 'Ola Pessoal' },
      { type: 'paragraph', content: 'Veja essa atualização nova do Disney +'},
      { type: 'link', content: 'https://www.disneyplus.com/' }
    ],
    publishedAt: new Date('2025-02-01 17:00:00')
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
          <Sidebar />
        <main>
          {posts.map(item => {
            return (
              <Post 
                author = {item.author}
                content = {item.content}
                publishedAt = {item.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

