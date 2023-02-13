import { useState, useRef } from "react"
import rocket1 from "../assets/rocketicon-01.svg"
import rocket2 from "../assets/rocketicon-02.svg"
import music from "../assets/space-120280.mp3"

const PlayMusic = () => {
  const [playing, setPlaying] = useState(false)

  const song = music

  const audioRef = useRef(new Audio(song))
  audioRef.current.volume = 0.2
  audioRef.current.loop = true

  const play = () => {
    setPlaying(true)
    audioRef.current.play()
  }

  const pause = () => {
    setPlaying(false)
    audioRef.current.pause()
  }

  return (
    <div className="absolute top-0 rotate-180">
      {(playing === false && (
        <img
          src={rocket1}
          alt="MY rocket"
          className="w-32 h-32"
          onClick={playing ? pause : play}
        ></img>
      )) || (
        <img
          src={rocket2}
          alt="MY rocket2"
          className=" w-32 h-32 animate-bounce "
          onClick={playing ? pause : play}
        ></img>
      )}
    </div>
  )
}

export default PlayMusic
