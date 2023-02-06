import React, {useEffect, useState} from 'react';
import colors from "tailwindcss/colors";


export default function App() {
    const questions = [

        //TODO check converting | QuestionOptions array index === med questioncorrectanswer (indexnumbret)

        {
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'New York', isCorrect: false ,id:1},
                { answerText: 'London', isCorrect: false ,id:2},
                { answerText: 'Paris', isCorrect: true ,id:33},
                { answerText: 'Dublin', isCorrect: false ,id:4},
            ],
            answerTest: [
                { answerTest2: 'djdsapodjasdposdosjdosadjsoapddjdsapo' +
                        'djasdposdosjdosadjsoapddjdsapodjasdposdosjdosadjsoapd'},

            ],

        },
        {
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false,id:1 },
                { answerText: 'Elon Musk', isCorrect: true,id:33 },
                { answerText: 'Bill Gates', isCorrect: false ,id:3},
                { answerText: 'Tony Stark', isCorrect: false ,id:4},
            ],
            answerTest: [
                { answerTest2: 'djdsapodjasdposdosjdosadjsoapd'},

            ],
        },
        {
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true ,id:33},
                { answerText: 'Intel', isCorrect: false ,id:2},
                { answerText: 'Amazon', isCorrect: false,id:3 },
                { answerText: 'Microsoft', isCorrect: false,id:4 },
            ],
            answerTest: [
                { answerTest2: 'djdsapodjasdposdosjdosadjsoapd'},

            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false ,id:1},
                { answerText: '4', isCorrect: false ,id:2},
                { answerText: '6', isCorrect: false ,id:3},
                { answerText: '7', isCorrect: true ,id:33},
            ],
            answerTest: [
                { answerTest2: 'djdsapodjasdposdosjdosadjsoapd'},

            ],
        },
    ];



    const [active, setActive] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [showRewardText, setShowRewardText] = useState(false);
    const [color, setColor] = useState('')

    //Resetting to first question and set points to zero
    const resetHandler = () => {
        setCurrentQuestion(0);
        setShowScore(false);
        setScore(0);
        setActive(true);
    }


    //Handler for setting score if true and change color based on true or false
    const buttonHandlerGuesser = (isCorrect, answerText) => {
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
        if (nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        }
        else {
            setShowScore(true);
        }

    }
    // creates a background with 3 div fields which contains questions,answerOptions with buttons and rewardText for right answer.
    return (
        <section className='flex m-auto  w-2/4 mt-56 bg-metal mb-28 rounded-xl shadow-md'>
            {showScore ? (
                <div className='score-section'>You scored {score} out of {questions.length}
                    <button onClick={resetHandler}>Restart</button>
                </div>

            ) : (
                <div className="flex-col-2 relative m-auto mt-12">
                    <div className='m-auto'>
                        <div className='question-count'>
                            <span>Question {currentQuestion +1}  </span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>


                    </div>
                    <div className="m-auto mt-10 space-x-10 mb-20 ">
                        {questions[currentQuestion].answerOptions.map((answerOption) =>
                            <button disabled={!active} className={answerOption.isCorrect ? color + "rounded-2xl p-2 hover:bg-white transition ease-in-out duration-300" : "rounded-2xl p-2 hover:bg-white transition ease-in-out duration-300"} onClick={() =>buttonHandlerGuesser(answerOption.isCorrect, answerOption.answerText )} key={answerOption.answerText}>{answerOption.answerText}</button>
                        )}

                        <div className='absolute right-0 bottom-0 bg-white rounded-2xl' > <button className={active ? 'hidden' : 'block' } onClick={nextQuestionHandler}  >Next > </button></div>

                    </div>

                </div>

            )}

        <div>
            {showRewardText ? (
                <div className='max-w-xs text-bubble-gum' >REWARD {questions[currentQuestion].answerTest.map((answerReward) =>
                    <p className='text-left break-words text-white'>{answerReward.answerTest2}</p>
                )}</div>
            ) : (<>

                    <div className='hidden'>

                    </div>

                </>

            )}

        </div>


        </section>



    );

}

