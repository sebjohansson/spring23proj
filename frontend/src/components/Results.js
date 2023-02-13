import gold from "../assets/spaceslammedal-03.png";
import bronze from "../assets/spaceslammedal-04.png";
import silver from "../assets/spaceslammedal-05.png";
import icon5 from "../assets/icon-08.svg";
import { useState, useEffect } from "react";

const Results = ({ score }) => {
  const maxScore = 10;
  const [status, setStatus] = useState(icon5);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const ScoreHandler = () => {
    if (score >= 9) {
      setStatus(gold);
      setMessage("Congratulations Astronaut!");
    } else if (score <= 8 && score >= 6) {
      setStatus(silver);
      setMessage("Well done Cadet");
    } else if (score <= 5 && score >= 1) {
      setStatus(bronze);
      setMessage("There are more about space");
    } else {
      setStatus(icon5);
      setMessage("Space is truly unknown");
    }
  };

  useEffect(() => {
    ScoreHandler();

    setTimeout(() => {
      if (score > 0) {
        setIsLoading(false);
      } else {
        console.log("Loading...")
      }
    }, 1000);
  }, [score]);

  return (
    <div>
      <section className="bg-purple-500 bg-opacity-50 outline-8 outline-dotted outline-purple-400 p-10 m-auto md:w-3/5 lg:w-2/5 rounded-lg pt-10 pb-10 text-center">
        <img
          className={
            isLoading
              ? "animate-spin right-0  top-0"
              : "right-0 top-0"
          }
          src={status}
          alt="Loading"
        />

        {isLoading ? (
          <></>
        ) : (
          <div>
            <h1 className="text-lg font-black tracking-widest text-white">
              {message}
            </h1>
            <div className="grid grid-cols-1">
              <p className="pb-5 pt-5 opacity-100 text-white font-semibold animate-pulse inline-block tracking-widest">
                You scored {score}/{maxScore}
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Results;
