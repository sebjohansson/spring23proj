const express = require("express")
const router = express.Router()
const ImgController = require("../controllers/imgController")
// Route for patching in images to QuestionImageLink field.
router.route("/").patch(ImgController.patchImg)
// exporting the router to be able to import it in server.js
module.exports = router
