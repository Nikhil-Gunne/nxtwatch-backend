const express = require("express");
const { addReactedVideo, getReactedVideos, updateVideo } = require("../controllers/likedVideos");

const router  = express.Router()
const tokenMiddleware = require("../middlewares/tokenMiddleware")
router.use(tokenMiddleware)
// api to add reacted video to likedvideos collection
router.post("/",addReactedVideo)

// api to get reacted videos from likedvideos collection
router.get("/",getReactedVideos)

// api to update reacted video from likedvideos collection
router.patch("/:id",updateVideo)


module.exports = router