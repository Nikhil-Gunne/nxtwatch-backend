const mongoose = require("mongoose")

const Schema = mongoose.Schema 

const savedVideosSchema = new Schema({
    id:{
        type: String,
        required:true
    },
    title:{
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
    },user_id:{
        type:String,
        required:true
    }
},{timestamps:true})


module.exports = mongoose.model('savedVideos',savedVideosSchema)