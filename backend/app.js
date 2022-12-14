const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

require("dotenv").config()


const userRouter = require("./routes/userRoutes")
const videoRouter = require("./routes/videoRoutes")
const trendingVideosRouter = require("./routes/trendingVideoRoute")
const gamingVideosRouter = require("./routes/gamingVideoRoutes")
const videoPlayerRouter = require("./routes/videoPlayerRoutes")
const savedVideosRouter = require("./routes/savedVideosRoutes")
const reactedVideosRouter = require("./routes/reactedVideoRoutes")

const app = express()



app.use(express.json())

app.use(cors())

app.use("/api/user",userRouter)
app.use("/addvideos",savedVideosRouter)
app.use("/videos",videoRouter)
app.use("/videosplayer",videoPlayerRouter)
app.use("/gamingvideos",gamingVideosRouter)
app.use("/reactedvideos",reactedVideosRouter)
app.use("/trendingvideos",trendingVideosRouter)


const connectToDb = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        app.listen(process.env.PORT,()=>{
            console.log('listening to port',process.env.PORT)
        })
    }
    catch(error){
        console.log("cannot connect to db",error.message)
    }


}
connectToDb()




