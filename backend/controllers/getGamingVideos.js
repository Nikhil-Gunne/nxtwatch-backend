const gamingModel = require("../models/gamingModel")

const getGamingVideos = async(req,res) =>{
    try{

        const videos = await gamingModel.find({})
        res.status(200).json({videos})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }


}


module.exports={
    getGamingVideos
}