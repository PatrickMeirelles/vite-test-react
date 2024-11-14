import { Header } from "./components/Header"
import { Post } from "./Post"
import "./styles.css"

function App() {
  return (
    <div>
      <Header />
      <Post author="Patrick" content="POSPOAPORPASOPDAOPDOASPODA"/>
      <Post author="Shippify" content="GetShipDone"/>
    </div>
  )
}

export default App

