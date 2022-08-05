const signService = require('../service/sign.service.js')
class signClass{
   signService
    getUser(id){
        
    }
           
       
    
    
    
    signUp = async(req, res, next) => {//회원가입
    try{
        const {id, pw , nickname, confirmPw} = req.body;
        if(pw !== confirmPw){
            //비밀번호가 다른 경우
            return res.status(400).send({bool : false,msg :"아이디 또는 비밀번호를 확인하세요." })
        }
        signService.()
        //아이디가 영소,대문자 
        
    }
    catch{
        next(err)
    }

    }
    
    singIn = async(req, res, next) => {//로그인
    try{

    }catch{
        next(err)
    }
    }
}


module.exports = {
    signClass
}