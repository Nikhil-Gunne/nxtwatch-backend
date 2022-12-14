const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcrypt")

const Schema = mongoose.Schema

const nxtUserSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
})

//static login function
nxtUserSchema.statics.login = async function (email,password){
    const userExists = await this.findOne({email})
    // console.log(userExists,2)
    if(!userExists){
        throw Error("user with email doesn't exist")
    }
    const passwordMatched = await bcrypt.compare(password,userExists.password)
    if(passwordMatched){
        // console.log("matched")
        return userExists
    }
    else{
        throw Error("wrong password")
    }
}


//static signup function
nxtUserSchema.statics.signup = async function(email, password) {
    const userExists = await this.find({ email })
    if (userExists.length) {
        throw Error("user with email already exists")
    }

    if (!validator.isEmail(email)) {
        throw Error("not a valid email")
    }
    if (!validator.isStrongPassword(password)) {
        throw Error("not a strong password")
    }
    try {
        const salt = await bcrypt.genSalt(10)
        const hashed_password = await bcrypt.hash(password, salt)
        const user = await this.create({ email, password: hashed_password })
        return user
    } catch (error) {
        return {error:error.message}
    }
}

module.exports = mongoose.model("NXTUser", nxtUserSchema)