const mongoose = require("mongoose")

const Schema = mongoose.Schema

const videoItemSchema = new Schema({
    id:{
        type: String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    video_url:{
        type:String,
        required:true
    },
    thumbnail_url:{
        type:String,
        required:true
    },
    channel:{
        type:Object,
        required:true
    },
    view_count:{
        type:String,
        required:true
    },
    published_at:{
        type:String,
        required:true
    },description:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model("videoPlayer",videoItemSchema)