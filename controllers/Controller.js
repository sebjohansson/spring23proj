const Quiz = require('../models/Quiz')
const asyncHandler = require('express-async-handler')


// @desc GET all Question
// @route GET /questions
// @access Private
const getAllQuestions = asyncHandler(async (req, res) => {
    const questions = await Quiz.find().all()
    if (!questions.length) {
         return res.status(400).json({ message: 'No questions found'})
    }
    res.json(questions)

})

// @desc POST new Question
// @route POST /question
// @access Private
const postNewQuestion = asyncHandler(async (req, res) => {
    const { QuestionDescription,
            QuestionOptions,
            QuestionCorrectAnswer,
            QuestionExplanation,
            QuestionImageLink } = req.body

    //Confirm Data
    if( !QuestionDescription ||
        !QuestionOptions ||
        !QuestionCorrectAnswer ||
        !QuestionExplanation ||
        !QuestionImageLink) {
        return res.status(400).json({message: 'All fields are required'})
    }

    // Check for duplicate; not necessery but useful for FUTURE
    const duplicate = await Quiz.findOne({}).lean().exec()

    if (duplicate) {
        return res.status(409).json({message: 'Duplicate information'})
    }

    //Create and store question for quiz
    const quizObject = { QuestionDescription,
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
    const { QuestionDescription,
            QuestionOptions,
            QuestionCorrectAnswer,
            QuestionExplanation,
            QuestionImageLink
          } = req.body

     //Confirm Data
     if( !id ||
        !QuestionDescription ||
        !QuestionOptions ||
        !QuestionCorrectAnswer ||
        !QuestionExplanation ||
        !QuestionImageLink) {
        return res.status(400).json({message: 'All fields are required'})
    }


    const question = await Quiz.findById(id).exec()


    // ! Not found
    if (!question) {
        return res.status(400).json({message: 'Question from Quiz not found.'})
    }



})

// @desc DELETE existing Question
// @route DELETE /questions
// @access Private
const deleteExistingQuestion  = asyncHandler(async (req, res) => {


    const { id } = req.body
    const question = await Quiz.findById(id).exec()

    if (!question) {
        return res.status(400).json({ message: 'Question is not found'})
    }

    const result = await question.deleteOne()

    const reply = `Question ${result.question} with ID ${result._id}
    delete`

    res.json(reply)
})


module.exports = {
    getAllQuestions,
    postNewQuestion,
    patchExistingQuestion,
    deleteExistingQuestion
}










