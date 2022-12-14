const express = require("express")
const { getVideoById } = require("../controllers/videoPlayerController")

const router = express.Router()
const tokenMiddleware = require("../middlewares/tokenMiddleware")

router.use(tokenMiddleware)
router.get("/:id",getVideoById)


module.exports = router