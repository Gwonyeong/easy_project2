const express = require("express")

const signCtrl = require("../controller/signCtrl.js")

const router = express.Router();

router.post("/up", signCtrl.signUp)//회원가입
router.post("/in", signCtrl.singIn)//로그인

