import "./App.css"
import FetchAPI from "./components/fetchAPI"
import Footer from "./components/footer"
import Logo from "./components/logo"
import PlayMusic from "./components/PlayMusic"
import StartInfo from "./components/StartInfo"

function App() {
  return (
    <div className="">
      {/* <FetchAPI /> */} 
      <Logo />

      <StartInfo />
      <PlayMusic />

      <div className="">
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
