const express = require("express")
const { getVideos } = require("../controllers/videoControllers")

const router = express.Router()
const tokenMiddleware = require("../middlewares/tokenMiddleware")

router.use(tokenMiddleware)

//get videos api
router.get("/",getVideos)

module.exports = router