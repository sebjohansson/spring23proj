import gold from "../assets/spaceslammedal-03.png";
import bronze from "../assets/spaceslammedal-04.png";
import silver from "../assets/spaceslammedal-05.png";
import icon5 from "../assets/icon-10.svg"
import { useState, useEffect } from "react";

const Results = ({ score }) => {
  const maxScore = 10;
  const [status, setStatus] = useState(icon5);

  const ScoreHandler = () => {
    if (score >= 9) {
      setStatus(gold);
    } else if (score <= 8 && score >= 6) {
      setStatus(silver);
    } else {
      setStatus(bronze);
    }
  };

  useEffect(() => {
    ScoreHandler();
  }, []);

  return (
    <div>
        <section className="bg-purple-500 bg-opacity-50 outline-8 outline-dotted outline-purple-400 p-10 m-auto w-4/5 md:w-3/5 lg:w-2/5 rounded-lg pt-10 pb-10 text-center">
          <img className=" right-0 sticky top-0" src={status} />
          <h1 className="text-lg font-black tracking-widest text-white">
            Congratulations!
          </h1>
          <div className="grid grid-cols-1">
            <p className="pb-5 pt-5 opacity-100 text-white font-semibold animate-pulse inline-block tracking-widest">
              You scored {score}/{maxScore}
            </p>
          </div>
        </section>
    </div>
  );
};

export default Results;
