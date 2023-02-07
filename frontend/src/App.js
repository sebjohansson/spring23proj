import "./App.css"
import Footer from "./components/footer"
import Logo from "./components/logo"
import PlayMusic from "./components/PlayMusic"
import StartInfo from "./components/StartInfo"
import MyFirst from "./components/MyFirst";

function App() {
  return (
    <div className="">
      <Logo />
        <MyFirst />
      <StartInfo />
      <PlayMusic />

      <div className="">
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
