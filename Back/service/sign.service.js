const signRepository = require('../repository/signRepository')
const jwt = require("jsonwebtoken")
require('dotenv').config();
const env = process.env;


class SignService {
    signRepository = new signRepository()

    // 8월 8일 완료
    //User의 데이터베이스에서 인자로 받는 id값을 이용해 중복되는 
        //id가 있는지 확인하는 함수. 
        //return 중복되는 아이디가 있다면 true 없다면 false
    dupUserSearch = async (id) => {
        try{
            const dup_user = await this.signRepository.findDupId(id);
            if(dup_user){
                return {
                    bool : true,
                    msg: "중복된 아이디가 있습니다."
                }
            }else return {
                bool : false,
                msg: "사용 가능한 아이디 입니다."
            }
        }catch(err){
            next(err)
        }
    }
    // 8월 8일 완료
    //id와 pw를 이용해 회원가입을 하는 함수. 
        //return값은 msg : "회원가입을 축하드립니다."
    createUser = async (id, pw, nickname) => {
               
        pw = jwt.sign(pw, env.secretKey)
        const createUserDate =await this.signRepository.createUser(id, pw, nickname)

        return createUserDate
    }
    // 8월 8일 완료
    //로그인 기능을 담당하는 함수 
    // 1. 사용자에게 받은 아이디값을 데이터베이스에 있는 유저정보와 비교
    // 2. 비교한 정보와 사용자에게 받은 비밀번호가 같다면 로그인 성공
    // 3. 로그인에 성공했다면 true와 쿠키로 토큰(사용자의 아이디 값) 발급
    getLogin = async (id, pw) => {
        try{
        const loginData = await this.signRepository.loginUser(id)
        
        if(pw === jwt.verify(loginData.pw, env.secretKey)){
            
            const token = await jwt.sign((loginData.id
                ,loginData.nickname), env.secretKey)
            
            return {
                bool : true,
                token
            }
        }else{
            
            return {
                bool : false
            }
        }}catch(err){
            next(err)
        }
    }
}

module.exports = SignService
