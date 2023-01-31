const Quiz = require('../models/Quiz')
const asyncHandler = require('express-async-handler')


// @desc GET all Question
// @route GET /questions
// @access Private
const getAllQuestions = asyncHandler(async (req, res) => {
    const questions = await Quiz.find().select().lean()
    if (!questions?.length) {
         return res.status(400).json({ message: 'No questions found'})
    }
    res.json(questions)

})

// @desc POST new Question
// @route POST /question
// @access Private
const postNewQuestion = asyncHandler(async (req, res) => {
    const { QuestionIndex,
            QuestionDescription,
            QuestionOptions,
            QuestionCorrectAnswer,
            QuestionExplanation,
            QuestionImageLink } = req.body

    //Confirm Data
    if( !QuestionIndex ||
        !QuestionDescription ||
        !QuestionOptions ||
        !QuestionCorrectAnswer ||
        !QuestionExplanation ||
        !QuestionImageLink) {
        return res.status(400).json({message: 'All fields are required'})
    }


    //Create and store question as Object for quiz
    const quizObject = { QuestionIndex,
                         QuestionDescription,
                         QuestionOptions,
                         QuestionCorrectAnswer,
                         QuestionExplanation,
                         QuestionImageLink
                        }

    const question = await Quiz.create(quizObject)
    if (question) { //created
     res.status(201).json({ message: `New Question created: ${question} `})
    } else {
     res.status(400).json({ message: `Invalid Data recieved`})
     }

})

// @desc PATCH existing Question
// @route PATCH /questions
// @access Private
const patchExistingQuestion = asyncHandler(async (req, res) => {
    const {
            QuestionIndex,
            QuestionDescription,
            QuestionOptions,
            QuestionCorrectAnswer,
            QuestionExplanation,
            QuestionImageLink
          } = req.body

         //Confirm Data
         if(
            !QuestionIndex ||
            !QuestionDescription ||
            !QuestionOptions ||
            !QuestionCorrectAnswer ||
            !QuestionExplanation ||
            !QuestionImageLink) {
            return res.status(400).json({message: 'All fields are required'})
        }

        const question = await Quiz.findOneAndUpdate(QuestionIndex).exec()

                // ! Not found
                if (!question) {
                    return res.status(400).json({message: 'Question from Quiz not found.'})
                }

                question.QuestionIndex = QuestionIndex
                question.QuestionDescription = QuestionDescription
                question.QuestionOptions = QuestionOptions
                question.QuestionCorrectAnswer = QuestionCorrectAnswer
                question.QuestionExplanation = QuestionExplanation
                question.QuestionImageLink = QuestionImageLink
            
                const updatedQuestion = await question.save()

                res.json({message: `${updatedQuestion.QuestionIndex} updated`})
})

// @desc DELETE existing Question
// @route DELETE /questions
// @access Private
const deleteExistingQuestion  = asyncHandler(async (req, res) => {


    const { QuestionIndex } = req.body
    const question = await Quiz.findOneAndDelete(QuestionIndex).exec()

    if (!question) {
        return res.status(400).json({ message: 'Question is not found'})
    }

    const result = await question.deleteOne()

    const reply = `Question ${result.QuestionDescription} with ID ${result.QuestionIndex} deleted`

    res.json(reply)
})


module.exports = {
    getAllQuestions,
    postNewQuestion,
    patchExistingQuestion,
    deleteExistingQuestion
}










