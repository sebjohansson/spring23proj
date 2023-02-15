const express = require('express');
const router = express.Router()
const QuestionOptionController = require("../controllers/QuestionOptionController")

// Route for patching the QuestionOption answerText and isCorrect
router.route("/").patch(QuestionOptionController.patchQuestionOptions)
// exporting the router to be able to import it in server.js
module.exports = router