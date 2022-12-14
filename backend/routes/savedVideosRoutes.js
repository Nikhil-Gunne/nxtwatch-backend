const express = require("express")
const { addVideo, getSavedVideos, deleteSavedVideo } = require("../controllers/savedVideosController")

const router = express.Router()
const tokenMiddleware = require("../middlewares/tokenMiddleware")

router.use(tokenMiddleware)
router.post("/",addVideo)

router.get("/",getSavedVideos)

router.delete("/:id",deleteSavedVideo)

module.exports = router