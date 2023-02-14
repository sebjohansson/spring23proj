import "./App.css";
import Footer from "./components/footer";
import Logo from "./components/logo";
import PlayMusic from "./components/PlayMusic";
import StartInfo from "./components/StartInfo";
import React, { useState } from "react";
import QuizGame from "./components/QuizGame";
function App() {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <div className="">
      <div className="sticky top-0">
        <PlayMusic />
      </div>
      <Logo />
      {isStarted && <QuizGame stateHandler={setIsStarted} />}
      {!isStarted && <StartInfo stateHandler={setIsStarted} />}
      <Footer />
    </div>
  );
}

export default App;
