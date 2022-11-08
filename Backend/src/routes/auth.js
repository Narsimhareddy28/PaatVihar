const express = require("express");
const {signUp,signIn,requireSignIn}=require("../controllers/auth")

// express-validator is used for the validation of the user 
const {check}=require('express-validator')

const router = express.Router();

// routing

router.post("/signin",signIn);
router.post("/signup",signUp);
router.post("/profile",requireSignIn,(req,res,next)=>{
	res.status(200).json({
		message:"Profile Page"
	})
})
module.exports = router;
