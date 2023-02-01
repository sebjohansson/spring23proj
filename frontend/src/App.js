import React, { useState } from 'react';
import colors from "tailwindcss/colors";


export default function App() {
    const questions = [
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


    let colorForCorrectAndFalse = '';
    const {color,setColor} = useState('');
    const [active, setActive] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [point, setPoint] = useState(0);
    const [showRewardText, setShowRewardText] = useState(false);

    //Resetting to first question and set points to zero
    const resetHandler = () => {

        setCurrentQuestion(0);
        setShowScore(false);
        setScore(0);
        setActive(true);



    }


    //Handler for setting score if true and change color based on true or false
    const buttonHandlerGuesser = (isCorrect,id) => {
        setActive(false);

        if (isCorrect === true){
            setShowRewardText(true)
            setScore(score +1);

        }
        else {

        }

    }
    // Handler for button to change next question and change to showScore phase when done with all questions.
    const nextQuestionHandler = () => {
        setShowRewardText(false)

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
        <div className='app'  style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            {showScore ? (
                <div className='score-section'>You scored {score} out of {questions.length}
                    <button onClick={resetHandler}>Restart</button>
                </div>

            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion +1}  </span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>




                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) =>
                            <button disabled={!active} id={answerOption.id} className='' onClick={() =>buttonHandlerGuesser(answerOption.isCorrect,answerOption.id) }>{answerOption.answerText}</button>
                        )}
                        <div className='testButtonDiv'> <button className={'nextButton'} disabled={active} onClick={nextQuestionHandler}  >Next</button></div>

                    </div>
                    {showRewardText ? (

                    <div className='max-w-xs text-bubble-gum' >REWARD {questions[currentQuestion].answerTest.map((answerReward) =>
                        <p className='text-left break-words text-white'>{answerReward.answerTest2}</p>
                    )}</div>
                    ) : (<>

                            <div className='w-full'>

                            </div>

                            </>

                        )}
                </>

            )}




        </div>

    );

}

