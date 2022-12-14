const express = require("express")
const { getGamingVideos } = require("../controllers/getGamingVideos")


const router = express.Router()
const tokenMiddleware = require("../middlewares/tokenMiddleware")

router.use(tokenMiddleware)
router.get("/",getGamingVideos)



module.exports = router