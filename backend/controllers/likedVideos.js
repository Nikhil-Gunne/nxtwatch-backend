const likedVideosModel = require("../models/likedVideosModel")

const updateVideo = async (req,res) =>{
    const video = req.body
    const {id} = req.params
    const user_id = req.user_id
    // console.log(req.body)

    try{
        const responseVideo = await likedVideosModel.findOneAndUpdate({ user_id, video_id:id }, video)
         res.status(200).json({ responseVideo })
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
    
}

const addReactedVideo = async (req, res) => {
    const video = req.body
    const user_id = req.user_id
    
    try {
        const responseVideo = await likedVideosModel.create({ ...video, user_id })
        res.status(200).json({ responseVideo })

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getReactedVideos = async (req, res) => {
    const user_id = req.user_id
    try {
        const reactedVideos = await likedVideosModel.find({ user_id })
        res.status(200).json({ reactedVideos })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}


module.exports = { addReactedVideo, getReactedVideos,updateVideo }