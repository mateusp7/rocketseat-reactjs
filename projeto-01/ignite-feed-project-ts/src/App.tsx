import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import Post from "./Components/Post"

import styles from "./App.module.css"
import "./global.css"

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        contentPost:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
      },
      { type: "link", content: "jane.design/doctorcare" },
      // { type: "link", content: "#novoprojeto" },
      // { type: "link", content: "#nlw" },
      // { type: "link", content: "#rocketseat" },
    ],
    publishedAt: new Date("2023-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/mateusp7.png",
      name: "Mateus Paulo",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        contentPost:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz junto com a Rocketseat",
      },
      { type: "link", content: "vercel.app/mateusp7" },
      // { type: "link", content: "#novoprojeto" },
      // { type: "link", content: "#nlw" },
      // { type: "link", content: "#rocketseat" },
    ],
    publishedAt: new Date("2023-03-30 10:22:00"),
  },
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
