const Quiz = require("../models/Quiz")
const asyncHandler = require("express-async-handler")
// Function for patching only the images by using QuestionIndex and QuestionImageLink
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
// exporting the function to be able to import it
module.exports = {
  patchImg,
}
