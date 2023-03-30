import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import Post from "./Components/Post"

import styles from "./App.module.css"
import "./global.css"

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Mateus Paulo"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, labore consequuntur error alias vel,"
          />
          <Post
            author="Juliana Meira"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, labore consequuntur error alias vel,"
          />
        </main>
      </div>
    </div>
  )
}

export default App
