const express = require('express')
const router = express.Router()
const Controller = require('../controllers/Controller')

router.route('/')
    .get(Controller.getAllQuestions)
    .post(Controller.postNewQuestion)
    .patch(Controller.patchExistingQuestion)
    .delete(Controller.deleteExistingQuestion)

module.exports = router