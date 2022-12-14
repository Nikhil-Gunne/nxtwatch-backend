const jwt = require("jsonwebtoken")

const tokenMiddleware = (req,res,next) =>{
    try{
        const {authorization} = req.headers
        console.log(authorization)
        const token  = authorization.split(" ")[1]
        if(token){
            
            const {_id} = jwt.verify(token,process.env.SECRET)
            req.user_id=_id
            next()
            
        }
    }catch(error){
        res.status(400).json({error:error.message})
    }

}


module.exports = tokenMiddleware