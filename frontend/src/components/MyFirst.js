import React, {useEffect, useState} from "react";



export default function MyFirst({stateHandler}) {




    const [active, setActive] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [showRewardText, setShowRewardText] = useState(false);
    const [color, setColor] = useState('');

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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
                   setQuiz(v)
               })
               .catch((e) => {
                   console.error(`An error occurred: ${e}`)
                   setError(e)
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
        setQuiz(v)
    }
    const returnHandler = () => {
        stateHandler(false)
    }

    //Handler for setting score if true and change color based on true or false
    const buttonHandlerGuesser = (isCorrect) => {
        setActive(false);
        if (isCorrect === true){
            setColor("bg-bubble-gum rounded-2xl")

            setShowRewardText(true)
            setScore(score +1);

        }
        else {
            setColor("bg-tahiti rounded-2xl")

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
        <section className='flex m-auto  w-2/4 relative bg-white mb-28 rounded-xl shadow-md'>
            <button className='bg-tahiti absolute top-0 left-0' onClick={returnHandler}>Go back</button>
            {showScore ? (
                <div className='score-section'>You scored {score} out of {quiz.length}>
                    <button onClick={resetHandler}>Restart</button>
                </div>

            ) : (
                <div className="flex-col-2 relative m-auto mt-12">
                    <div className='m-auto'>
                        {loading && <p>Loading...</p>}
                        {!loading && <div className='question-count'>
                            <span>Question {currentQuestion + 1}  </span>/{quiz.length}
                        </div>}
                        </div>

                    <div className='question-text'>{!loading && quiz[currentQuestion]?.QuestionDescription}</div>

                    <div className="m-auto mt-10 space-x-10 mb-20 ">
                        {!loading && quiz[currentQuestion]?.QuestionOptions?.map((answerOption) =>
                            <button disabled={!active}  className={answerOption.isCorrect ? color + "rounded-2xl p-2 hover:bg-metal transition ease-in-out duration-300" : "rounded-2xl p-2 hover:bg-metal transition ease-in-out duration-300"} key={answerOption.answerText} onClick={() =>buttonHandlerGuesser(answerOption.isCorrect, answerOption.answerText )} >{answerOption.answerText}</button>
                        )}


                        <div className='absolute right-0 bottom-0 bg-purple rounded-2xl' > <button className={active ? 'hidden' : 'block' } onClick={nextQuestionHandler}  >Next > </button></div>

                    </div>

                </div>

            )}
        </section>
            <div>
                {showRewardText ? (
                    <div className='max-w-xs text-bubble-gum' >REWARD
                        {<p className='text-left break-words text-white'>{quiz[currentQuestion]?.QuestionExplanation}</p>}
                    </div>
                ) : (<>

                        <div className='hidden'>

                        </div>

                    </>

                )}

            </div>



        </>


    );

}

