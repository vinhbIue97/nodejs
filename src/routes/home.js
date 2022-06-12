const express = require("express")
const router = express.Router()
const HomeController = require("../app/controllers/HomeController")
// [GET] /
router.use("/", (req, res) => HomeController.index(req, res))

module.exports = router
