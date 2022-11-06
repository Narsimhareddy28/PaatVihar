const express = require("express");
const router = express.Router();
const {signUp,signIn,requireSignIn}=require("../../controllers/admin/auth")
// routing
router.post("/admin/signin",signIn);
router.post("/admin/signup",signUp);

module.exports = router;
