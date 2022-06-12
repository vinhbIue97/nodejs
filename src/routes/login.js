const express = require("express")
const router = express.Router()
const loginController = require("../app/controllers/LoginController")
// [GET] /login
router.use("/", (req, res) => loginController.index(req, res))

module.exports = router
