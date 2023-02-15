const asyncHandler = require("express-async-handler");
const Quiz = require("../models/Quiz");

// Function for patching only the QuestionOption answerText and isCorrect by using QuestionIndex and QuestionOptions
const patchQuestionOptions = asyncHandler(async (req, res) => {
    const {QuestionIndex, QuestionOptions,} = req.body

    //Confirm Data
    if (!QuestionIndex) {
        return res.status(400).json({ message: "Question Index field is required" })
    }

    const question = await Quiz.findOne({ QuestionIndex: QuestionIndex })

    // ! Not found
    if (!question) {
        return res.status(400).json({ message: "Question from Quiz not found." })
    }

    question.QuestionOptions = QuestionOptions


    const updatedQuestion = await question.save()

    res.json({ message: `${updatedQuestion.QuestionOptions} updated` })
})
// exporting the function to be able to import it
module.exports = {
    patchQuestionOptions,
}