const mongoose = require("mongoose")

const Schema = mongoose.Schema

const videoSchema = new Schema({
    id:{
        type:String
    },
    title:{
        type:String
    },
    thumbnail_url:{
        type:String
    },
    channel:{
        type:Object
    },
    view_count:{
        type:String
    },
    published_at:{
        type:String
    }
})

module.exports=mongoose.model("videos",videoSchema)
