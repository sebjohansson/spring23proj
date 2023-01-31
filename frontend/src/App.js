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
        },
        {
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false,id:1 },
                { answerText: 'Elon Musk', isCorrect: true,id:33 },
                { answerText: 'Bill Gates', isCorrect: false ,id:3},
                { answerText: 'Tony Stark', isCorrect: false ,id:4},
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
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false ,id:1},
                { answerText: '4', isCorrect: false ,id:2},
                { answerText: '6', isCorrect: false ,id:3},
                { answerText: '7', isCorrect: true ,id:33},
            ],
        },
    ];

    const handleClicker = () => {

        setActive(!active);
    }
    const filterWeek2 = () => {
        setActive(!active);
    };
    let colorForCorrectAndFalse = '';
    const {color,setColor} = useState('');
    const [active, setActive] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [point, setPoint] = useState(0);

    //Resetting to first question and set points to zero
    const handlerReset = () => {
        setCurrentQuestion(0);
        setShowScore(false);
        setScore(0);
        setActive(true);
        setPoint(0);
        setColor('');

    }
    //Old auto nextQuestionAndSetPoint handler
    const handlerAnswerButtonOnClick = (isCorrect) => {
        if (isCorrect === true){
            setScore(score +1);

        }
        const nextQuestion = currentQuestion +1;
        if (nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        }
        else {
            setShowScore(true);
        }

    }

    //Handler for setting score if true and change color based on true or false
    const handlerAnswerButtonColor = (isCorrect,id) => {
        setActive(false);

        if (isCorrect === true && id === 33 ){
            setScore(score +1);
            setPoint(id);
            setColor('#2f922f');

        }
        else {

        }
        //TODO fix better solution need to toggle active after every new question

    }
    // Handler for button to change next question.
    //TODO cant skip question before answering! and disable when answering
    const handlerNextQuestion = () => {
        const nextQuestion = currentQuestion +1;
        setActive(true);
        if (nextQuestion < questions.length){

            setCurrentQuestion(nextQuestion);

        }

        else {
            setShowScore(true);
        }

    }

    return (
        <div className='app'  style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            {showScore ? (
                <div className='score-section'>You scored {score} out of {questions.length}
                    <button onClick={handlerReset}>Restart</button>
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
                            <button disabled={!active} id={answerOption.id} className={color} onClick={() =>handlerAnswerButtonColor(answerOption.isCorrect,answerOption.id) }>{answerOption.answerText}</button>
                        )}
                        <div className='testButtonDiv'> <button className={'nextButton'} disabled={active} onClick={handlerNextQuestion}  >Next</button></div>

                    </div>

                </>

            )}

            {/*{showScore ? (*/}
            {/*    <div className='score-section'>You scored {score} out of {questions.length}*/}
            {/*        <button onClick={handlerReset}>Restart</button>*/}
            {/*    </div>*/}

            {/*) : (*/}
            {/*    <>*/}
            {/*        <div className='question-section'>*/}
            {/*            */}
            {/*        </div>*/}

            {/*    </>*/}

            {/*)}*/}

        </div>
    );
}

