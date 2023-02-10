import "./App.css"
import Footer from "./components/footer"
import Logo from "./components/logo"
import PlayMusic from "./components/PlayMusic"
import StartInfo from "./components/StartInfo"
import React, {useState, useEffect} from "react"
import QuizGame from "./components/QuizGame"
function App() {
    const [isStarted,setIsStarted] = useState(false)
  return (
    <div className="">
      <Logo />
        {isStarted && <QuizGame stateHandler={setIsStarted}/>}
        {!isStarted && <StartInfo stateHandler={setIsStarted}/>}
      <PlayMusic />

      <div className="">
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
