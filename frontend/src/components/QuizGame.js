import React, {useEffect, useState} from "react";



export default function QuizGame({stateHandler}) {




    const [active, setActive] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [showRewardText, setShowRewardText] = useState(false);
    const [color, setColor] = useState('');

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [quiz, setQuiz] = useState([]);

    const shuffleArray = (d) => {
        for (let i = d.length; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            d.push(d[j]);
            d.splice(j,1)
        }
        return d
    }


    useEffect(() => {
       const fetchData = () => {
           fetch(`http://localhost:3500/questions`)
               .then(response => {
                   if (response.ok) {
                       return response.json()
                   }
               })
               .then(d => {
                   setLoading(false);
                   setData(d);
                   let v = shuffleArray(d)
                   setQuiz(v.slice(0,10))
               })
               .catch((e) => {
                   console.error(`An error occurred: ${e}`)

               });
       }
    fetchData();

    }, []);

    console.log(quiz)
    //Resetting to first question and set points to zero
    const resetHandler = () => {
        setCurrentQuestion(0);
        setShowScore(false);
        setScore(0);
        setActive(true);
        let v = shuffleArray(data)
        setQuiz(v.slice(0,10))
    }
    const returnHandler = () => {
        stateHandler(false)
    }

    //Handler for setting score if true and change color based on true or false
    const buttonHandlerGuesser = (isCorrect) => {
        setShowRewardText(true)
        setActive(false);
        if (isCorrect === true){
            setColor("bg-orange rounded-2xl")


            setScore(score +1);

        }
        else {
            setColor("bg-purple rounded-2xl")

        }

    }

    // Handler for button to change next question and change to showScore phase when done with all questions.
    const nextQuestionHandler = () => {
        setShowRewardText(false)
        setColor("")
        const nextQuestion = currentQuestion +1;
        setActive(true);
        if (nextQuestion < quiz.length){
            setCurrentQuestion(nextQuestion);
        }
        else {
            setShowScore(true);
        }

    }




    // creates a background with 3 div fields which contains questions,answerOptions with buttons and rewardText for right answer.
    return (
        <>
        <section className='flex m-auto  w-2/4 relative bg-newPurpleSlam mb-28 rounded-xl shadow-md'>
            <button className='absolute top-0 left-0 text-lightOrange hover:bg-purpleLight  ' onClick={returnHandler}>Return</button>
            {showScore ? (
                <div className='score-section flex-col-2 m-auto  mt-12 text-silver mb 12 '><p className={'animate-pulse inline-block p-2 mb-14'}>You scored {score} out of {quiz.length} </p>
                  <div className={'inline-block'}> <button className={'absolute bottom-0 right-0 border-2 rounded-2xl hover:bg-purpleLight text-silver p-2 '} onClick={resetHandler}>Restart</button></div>
                </div>

            ) : (
                <div className="flex-col-2 relative m-auto mt-12 grow">
                    <div className='grid'>
                        {loading && <p>Loading...</p>}
                        {!loading &&
                            <p className='m-auto text-2xl text-silver'>Question {currentQuestion + 1}  /{quiz.length} </p>
                        }
                        {!loading && <p className='m-auto text-3xl text-silver'>{quiz[currentQuestion]?.QuestionDescription}</p>}
                        </div>



                    <div className="flex justify-center space-x-4 mb-20 mt-5  ">
                        {!loading && quiz[currentQuestion]?.QuestionOptions?.map((answerOption) =>
                            <button disabled={!active}  className={answerOption.isCorrect ? color + " text-silver p-2 border-2 hover:bg-purpleLight transition ease-in-out duration-300 rounded" : "hover:bg-purpleLight text-silver border-2  p-2 hover:bg-metal transition ease-in-out duration-300 rounded"} key={answerOption.answerText} onClick={() =>buttonHandlerGuesser(answerOption.isCorrect, answerOption.answerText )} >{answerOption.answerText}</button>
                        )}



                    </div>
                    <div className='absolute right-0 bottom-0  ' > <button className={active ? 'invisible' : ' block border-2 bg-purpleLight hover:bg-newPurpleSlam rounded-2xl text-silver px-5 py-1 ' } onClick={nextQuestionHandler}  >Next  </button></div>

                </div>

            )}
        </section>

                {showRewardText ? (
                    <div className={'flex m-auto  w-2/4 relative bg-newPurpleSlam/50 rounded-xl boxShadow outline outline-4 outline-white p-5 '}>
                    <div className=' grid ' >
                        <h2 className=' font-bold font-bold m-auto text-3xl mb-5 text-white tracking-widest text-lightOrange'>REWARD</h2>
                        {<p className=' text-left break-words text-white italic text-xl font-light  '>{quiz[currentQuestion]?.QuestionExplanation}</p>}
                    </div>
                    </div>
                ) : (<>

                        <div className='hidden'>

                        </div>

                    </>

                )}





        </>


    );

}

