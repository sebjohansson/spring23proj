import laser from "../assets/laser.mp3"

const StartInfo = () => {
  let audio = new Audio(laser)
  const startLaser = () => {
    audio.play()
  }

  return (
    <section className="bg-purple-500 bg-opacity-50 outline-8 outline-dotted outline-purple-400 p-10 m-auto w-4/5 md:w-3/5 lg:w-2/5 rounded-lg">
      <h1 className="text-lg font-black tracking-widest text-white ">
        From Planet To Stars!
      </h1>
      <div className="grid grid-cols-1">
        <p className="pb-5 pt-5 opacity-100 text-white font-semibold tracking-widest">
          A fun and fast game to explore the universe at your own pace with a
          largre diveristy of questions, answers and knowledge.{" "}
        </p>
        <button
          onClick={startLaser}
          className="w-1/3 m-auto  bg-purple-300 hover:bg-purple-500 text-purple-800 hover:text-purple-300 hover:drop-shadow-2xl p-2 font-bold uppercase rounded"
        >
          START
        </button>
      </div>
    </section>
  )
}

export default StartInfo
