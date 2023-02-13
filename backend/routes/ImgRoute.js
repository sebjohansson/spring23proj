const express = require("express")
const router = express.Router()
const ImgController = require("../controllers/imgController")

router.route("/").patch(ImgController.patchImg)

module.exports = router
