const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")

const createToken = (_id) =>{
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
}

const loginUser = async (req,res) =>{
    const emptyFields = []
    const {email,password} = req.body
    if(!email){
        emptyFields.push("email")
    }
    if(!password){
        emptyFields.push("password")
    }
    if(emptyFields.length){
        return res.status(400).json({emptyFields,errorMsg:"fields cannot be empty"})
    }

    try{
        const user = await userModel.login(email,password)
        // console.log(user._id)
        const token = createToken(user._id)
        
        res.status(200).json({email,token})
    }catch(error){
        res.status(400).json({errorMsg:error.message})
    }
}

const signupUser = async(req,res) =>{
    const emptyFields = []
    const {email,password} = req.body
    if(!email){
        emptyFields.push("email")
    }
    if(!password){
        emptyFields.push("password")
    }
    if(emptyFields.length){
        return res.status(400).json({emptyFields,errorMsg:"fields cannot be empty"})
    }

    try{
        const user = await userModel.signup(email,password)
        // console.log(user._id)
        const token = createToken(user._id)
        res.status(200).json({email,token})
    }catch(error){
        res.status(400).json({errorMsg:error.message})
    }

}

module.exports = {
    loginUser,
    signupUser
}