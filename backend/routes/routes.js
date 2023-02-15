const express = require("express")
const router = express.Router()
const Controller = require("../controllers/Controller")
// Route for CRUD functions
router
  .route("/")
  .get(Controller.getAllQuestions)
  .post(Controller.postNewQuestion)
  .patch(Controller.patchExistingQuestion)

  .delete(Controller.deleteExistingQuestion)
// exporting the router to be able to import it in server.js
module.exports = router
