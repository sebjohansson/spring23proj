import icon1 from "../assets/icon-08.svg";
import icon2 from "../assets/icon-09.svg";
import icon3 from "../assets/icon-11.svg";
import icon4 from "../assets/icon-12.svg";
import icon5 from "../assets/icon-10.svg";
import marten from "../assets/marten.mp3";
import benny from "../assets/benny.mp3";
import linna from "../assets/linna.mp3";
import kj from "../assets/kj.mp3";
import sebbe from "../assets/sebbe.mp3";

const Footer = () => {
  let audioMarten = new Audio(marten);
  audioMarten.volume = 0.2;
  const marten1 = () => {
    audioMarten.play();
  };
  let audioBenny = new Audio(benny);
  audioBenny.volume = 0.2;
  const benny1 = () => {
    audioBenny.play();
  };
  let audioSebbe = new Audio(sebbe);
  audioSebbe.volume = 0.2;
  const sebbe1 = () => {
    audioSebbe.play();
  };
  let audioKj = new Audio(kj);
  audioKj.volume = 0.2;
  const kj1 = () => {
    audioKj.play();
  };
  let audioLinna = new Audio(linna);
  audioLinna.volume = 0.2;
  const linna1 = () => {
    audioLinna.play();
  };

  return (
    <div className="pt-10">
      <div className=" min-w-full pt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-2">
          <div
            onClick={marten1}
            className="bg-purple-600 outline outline-white outline-4 bg-opacity-90 p-5 place-self-center text-white font-bold uppercase tracking-widest rounded-lg"
          >
            <img
              className=" right-0 sticky top-0 animate-spin-slow"
              src={icon1}
            />
            Mårten
            <p className=" first-letter:uppercase lowercase italic text-sm font-light">
              Newton Yrkeshögskola{" "}
            </p>
            <p className="font-medium tracking-normal first-letter:uppercase lowercase">
              Mr coach
            </p>
            <a
              className=" text-sm font-light text-amber-300 lowercase"
              href="https://github.com/mesare12"
            >
              Mårten's GitHub
            </a>
          </div>
          <div
            onClick={benny1}
            className="bg-purple-600 outline outline-white outline-4 bg-opacity-90 p-5 place-self-center text-white font-bold uppercase tracking-widest rounded-lg"
          >
            <img
              className=" right-0 sticky top-0 animate-spin-slow"
              src={icon2}
            />
            benny
            <p className=" first-letter:uppercase lowercase italic text-sm font-light">
              Newton Yrkeshögskola{" "}
            </p>
            <p className="font-medium tracking-normal first-letter:uppercase lowercase">
              The overachiever
            </p>
            <a
              className=" text-sm font-light text-amber-300 lowercase"
              href="https://github.com/Bennygus"
            >
              Benny's GitHub
            </a>
          </div>
          <div
            onClick={linna1}
            className="bg-purple-600 outline outline-white outline-4 bg-opacity-90 p-5 place-self-center text-white font-bold uppercase tracking-widest rounded-lg"
          >
            <img
              className=" right-0 sticky top-0 animate-spin-slow"
              src={icon3}
            />
            Linna
            <p className=" first-letter:uppercase lowercase italic text-sm font-light">
              Newton Yrkeshögskola{" "}
            </p>
            <p className="font-medium tracking-normal first-letter:uppercase lowercase">
              Queen of css
            </p>
            <a
              className=" text-sm font-light text-amber-300 lowercase"
              href="https://github.com/BicepGirl"
            >
              Linna's GitHub
            </a>
          </div>
          <div
            onClick={sebbe1}
            className="bg-purple-600 outline outline-white outline-4 bg-opacity-90 p-5 place-self-center text-white font-bold uppercase tracking-widest rounded-lg"
          >
            <img
              className=" right-0 sticky top-0 animate-spin-slow"
              src={icon4}
            />
            Sebastian
            <p className=" first-letter:uppercase lowercase italic text-sm font-light">
              Newton Yrkeshögskola{" "}
            </p>
            <p className="font-medium tracking-normal first-letter:uppercase lowercase">
              Server mogul
            </p>
            <a
              className=" text-sm font-light text-amber-300 lowercase"
              href="https://github.com/sebjohansson"
            >
              Sebastian's GitHub
            </a>
          </div>
          <div
            onClick={kj1}
            className="bg-purple-600 outline outline-white outline-4 bg-opacity-90 p-5 place-self-center text-white font-bold uppercase tracking-widest rounded-lg"
          >
            <img
              className=" right-0 sticky top-0 animate-spin-slow"
              src={icon5}
            />
            Karl-johan
            <p className=" first-letter:uppercase lowercase italic text-sm font-light">
              Newton Yrkeshögskola{" "}
            </p>
            <p className="font-medium tracking-normal first-letter:uppercase lowercase">
              Head of back-end
            </p>
            <a
              className=" text-sm font-light text-amber-300 lowercase"
              href="https://github.com/kayjaytee"
            >
              Karl-Johan's GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
