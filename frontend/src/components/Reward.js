import React from "react";

const Reward = ({ stateHandler }) => {


  return (

 <section className=" m-auto w-3/4 relative bg-purple-600/50 mb-28 rounded-xl shadow-md p-2">
      
      {stateHandler?.map((quiz) => (
        
        <ul key={quiz._id} className="grid bg-purple-600 rounded-lg mb-4 p-2">

            <li className="m-auto p-5 text-2xl">{quiz.QuestionDescription}</li>
            <li className="m-auto p-1 w-3/5 mb-5">{quiz.QuestionExplanation}</li>


        {quiz.QuestionOptions.map((answer) => (
            <p key={answer.id} className={answer.isCorrect ? "text-2xl m-auto" : "hidden"}> Svar: {answer.answerText}</p>
        ))}

        </ul>

      ))}

    </section>
  );
};

export default Reward;

