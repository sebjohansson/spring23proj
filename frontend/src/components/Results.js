import gold from "../assets/spaceslammedal-03.png"
import bronze from "../assets/spaceslammedal-04.png"
import silver from "../assets/spaceslammedal-05.png"
import icon4 from "../assets/icon-12.svg";

const Results = () => {
    return(
        <div>
            <section className="bg-purple-500 bg-opacity-50 outline-8 outline-dotted outline-purple-400 p-10 m-auto w-4/5 md:w-3/5 lg:w-2/5 rounded-lg pt-10 pb-10 text-center">
                <img
                className=" right-0 sticky top-0"
                src={status}
                />
                <h1 className="text-lg font-black tracking-widest text-white">
                    Congratulations!
                </h1>
                <div className="grid grid-cols-1">
                    <p className="pb-5 pt-5 opacity-100 text-white font-semibold tracking-widest">
                        You scored 5/5{" "}
                    </p>
                </div>
            </section>
        </div>
    )
}
function playerReward({ src, status }) {
  return (
    <div>
      {
        {
          gold: <Gold src={gold} />,
          silver: <Silver src={silver} />,
          bronze: <Bronze src={bronze} />,
        }[status]
      }
    </div>
  );
}

export default Results