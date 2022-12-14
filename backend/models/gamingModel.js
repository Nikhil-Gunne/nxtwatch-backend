const mongoose = require("mongoose")

const Schema = mongoose.Schema


const gamingSchema = new Schema({
    id:{
        type:String,
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
    view_count:{
        type:String,
        required:true
    }

})


module.exports = mongoose.model('gamingVideos',gamingSchema)