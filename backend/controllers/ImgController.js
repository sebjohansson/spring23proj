const Quiz = require("../models/Quiz")
const asyncHandler = require("express-async-handler")

const patchImg = asyncHandler(async (req, res) => {
  const { QuestionIndex, QuestionImageLink } = req.body

  //Confirm Data
  if (!QuestionIndex) {
    return res.status(400).json({ message: "Question Index field is required" })
  }

  const question = await Quiz.findOne({ QuestionIndex: QuestionIndex })

  // ! Not found
  if (!question) {
    return res.status(400).json({ message: "Question from Quiz not found." })
  }
  question.QuestionImageLink = QuestionImageLink

  const updatedQuestion = await question.save()

  res.json({ message: `${updatedQuestion.QuestionImageLink} updated` })
})

module.exports = {
  patchImg,
}
