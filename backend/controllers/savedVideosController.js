const savedVideosModel = require("../models/savedVideosModel")

const addVideo = async(req,res) =>{
    const video = req.body
    const user_id = req.user_id
    // console.log(video,1)
    const newVideo ={id:video.id,title:video.title,thumbnail_url:video.thumbnail_url,
        channel:video.channel,view_count:video.view_count,published_at:video.published_at,description:video.description}
    // console.log(user_id,1)
    try{
        const addedVideo = await savedVideosModel.create({...newVideo,user_id})
        console.log(addedVideo)
        
        res.status(200).json({video})
        
    }
    catch(error){
        res.status(400).json({error:error.message})
    }

}

const getSavedVideos = async(req,res) =>{

    const user_id = req.user_id
    try{
        const videos = await savedVideosModel.find({user_id}).sort({createdAt:-1})
        // console.log(videos)
        if(videos){
            res.status(200).json({videos})
        }
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

const deleteSavedVideo = async(req,res)=>{
    const {id}=req.params
    const user_id =req.user_id
    try{
        const video = await savedVideosModel.findOneAndDelete({user_id,id:id})
        res.status(200).json({video})
    }catch(error){
        res.status(400).json({error:error.message})
    }

}


module.exports = {
    addVideo,
    getSavedVideos,
    deleteSavedVideo
}