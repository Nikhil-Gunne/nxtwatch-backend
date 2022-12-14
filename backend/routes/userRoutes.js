const express = require("express")
const { signupUser, loginUser } = require("../controllers/userControllers")

const router = express.Router()
//login api
router.post("/login",loginUser)

//signup api
router.post("/signup",signupUser)


module.exports = router