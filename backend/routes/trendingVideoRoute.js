const { getTrendingVideos } = require("../controllers/getTrendingVideos")

const express = require("express")

const router = express.Router()
const tokenMiddleware = require("../middlewares/tokenMiddleware")

router.use(tokenMiddleware)

router.get("/",getTrendingVideos)




module.exports = router