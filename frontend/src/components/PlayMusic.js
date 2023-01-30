import { useState, useRef } from "react";

import music from "../assets/space-120280.mp3";

const PlayMusic = () => {
  const [playing, setPlaying] = useState(false);

  const song = music;

  const audioRef = useRef(new Audio(song));

  const play = () => {
    setPlaying(true);
    audioRef.current.play();
  };

  const pause = () => {
    setPlaying(false);
    audioRef.current.pause();
  };

  return (
    <div>
      <button className="w-10 h-10" onClick={playing ? pause : play}></button>
    </div>
  );
};

export default PlayMusic;
