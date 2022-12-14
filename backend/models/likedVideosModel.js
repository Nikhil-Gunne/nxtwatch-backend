const mongoose = require("mongoose")

const Schema = mongoose.Schema 

const likedVideosSchema = new Schema({
    video_id:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true 
    },
    reaction_type:{
        type:String,
        required:true
    }
},{timestamps:true})


module.exports = mongoose.model("likedVideos",likedVideosSchema)