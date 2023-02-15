import React from "react";

const Reward = ({ stateHandler }) => {


  return (

 <section className="text-white m-auto w-3/4 relative  mb-28 rounded-xl p-2">
      
      {stateHandler?.map((quiz) => (
        
        <ul key={quiz._id} className="grid bg-violet-500/75 outline outline-purple-400 outline-dotted outline-8 rounded-lg mb-10 p-2 shadow-2xl">

            <li className="grid m-auto p-5 text-2xl font-bold tracking-widest">{quiz.QuestionDescription}</li>
            <li className="grid m-auto p-5 w-3/5 mb-5 font-mono grid">{quiz.QuestionExplanation}</li>


        {quiz.QuestionOptions.map((answer) => (
            <p key={answer.id} className={answer.isCorrect ? "text-2xl m-auto tracking-widest rounded-xl grid"  : "hidden"}> Svar: {answer.answerText}</p>
        ))}

        </ul>

      ))}

    </section>
  );
};

export default Reward;

