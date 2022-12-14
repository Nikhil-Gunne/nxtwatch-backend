
const videoModel = require("../models/videoModel")

const getVideos = async (req,res) =>{
    
    try{
        const videos = await videoModel.find({})
        res.status(200).json({videosList:videos})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }

}

module.exports={
    getVideos
}