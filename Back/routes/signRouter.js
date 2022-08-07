const express = require("express")
const router = express.Router();

const SignCtrl = require("../controller/signCtrl.js")
const signCtrl = new SignCtrl()



router.post("/up", signCtrl.signUp)//회원가입
router.post("/in", signCtrl.singIn)//로그인
router.post("/dup", signCtrl.dupCheck)//중복확인



module.exports =  router
