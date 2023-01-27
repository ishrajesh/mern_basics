const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')



const protect = asyncHandler(async (req,res,next)=>{
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            //Get token from header
            token = req.headers.authorization.split(' ')[1]

            // Verify token and decode it
            const decode = jwt.verify(token, process.env.JWT_SECRET)

            // Get user fom the token
            req.user = await User.findById(decode.id).select('-password')

            next()
        } catch(err){
            console.log(err)
            res.status(401)
            throw new Error('Not authorised')
        }
    }

    if(!token){
        res.status(401)
        throw new Error('Not authorised, no token found')
    }
})

module.exports = {
    protect,
}