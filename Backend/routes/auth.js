const express = require("express");
const router = express.Router();
const {signUp,signIn,requireSignIn}=require("../controllers/auth")
// routing
console.log(signIn)
router.post("/signin",signIn);
router.post("/signup",signUp);
router.post("/profile",requireSignIn,(req,res,next)=>{
	res.status(200).json({
		message:"Profile Page"
	})
})
module.exports = router;
