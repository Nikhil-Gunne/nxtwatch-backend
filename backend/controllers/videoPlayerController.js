const videoItemModel = require("../models/videoItemModel")

const getVideoById = async (req,res) =>{
    const {id} = req.params
    console.log(id)

    try{
        const video = await videoItemModel.findOne({id})
        if(video){
            res.status(200).json({video})
        }
    }catch(error){
        res.status(400).json({error:error.message})
    }
}


module.exports = {
    getVideoById
}