const trendingVideosModel = require("../models/trendingVideosModel")


const getTrendingVideos = async (req,res) =>{
    try{
        const trendingVideos = await trendingVideosModel.find({})
        res.status(200).json({trendingVideosList:trendingVideos})
    }
    catch(error){
        res.status(200).json({error:error.message})
    }

}





module.exports = {
    getTrendingVideos
}
