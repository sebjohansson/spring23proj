import "./App.css"
import Results from "./components/Results"
import Footer from "./components/footer"
import Logo from "./components/logo"
import PlayMusic from "./components/PlayMusic"
import StartInfo from "./components/StartInfo"
import React, { useState, useEffect } from "react"
import QuizGame from "./components/QuizGame"
function App() {
  const [isStarted, setIsStarted] = useState(false)
  return (
    <div className="">
      <div className="sticky top-0">
        <PlayMusic />
      </div>

      <Logo />

      {isStarted && <QuizGame stateHandler={setIsStarted} />}
      {!isStarted && <StartInfo stateHandler={setIsStarted} />}

      <div className="">
      </div>
    </div>
  )
}

export default App
