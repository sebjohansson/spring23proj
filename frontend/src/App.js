import "./App.css"
import Footer from "./components/footer"
import Logo from "./components/logo"
import PlayMusic from "./components/PlayMusic"
import StartInfo from "./components/StartInfo"
import MyFirst from "./components/MyFirst";
import React, {useState, useEffect} from "react"
function App() {
    const [isStarted,setIsStarted] = useState(false)
  return (
    <div className="">
      <Logo />
        {isStarted && <MyFirst stateHandler={setIsStarted}/>}
        {!isStarted && <StartInfo stateHandler={setIsStarted}/>}
      <PlayMusic />

      <div className="">
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
