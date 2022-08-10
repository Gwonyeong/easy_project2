const express = require("express")
const signRouter = require("./signRouter")
const authMiddleWare = require("../middlewares/auth-middleware")
const router = express.Router();


router.use('/sign',authMiddleWare, signRouter);

module.exports = router