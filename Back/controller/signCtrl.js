const signService = require('../service/sign.service.js')

class signClass{
   signService = new signService();
    
    //아이디의 중복을 확인하는 기능
    //중복이 있으면
    // {
    //     bool : true,
    //     msg: "중복된 아이디가 있습니다."
    // } 중복이 없으면{
    //     bool : false,
    //     msg: "사용 가능한 아이디 입니다."
    // }
    dupCheck = async(req, res, next) => {
        try{
            const {id} = req.body;
        const dupCheckData =await this.signService.dupUserSearch(id)
        
        res.send(dupCheckData)}
        catch(err){
            next(err)
        }
       
    }

    
    
    //회원가입 완료 
    // return msg: "회원가입을 축하드립니다."
    signUp = async(req, res, next) => {
    try{
        const {id, pw , nickname, confirmPw} = req.body;
        if(pw !== confirmPw){
            //비밀번호가 다른 경우
            return res.status(400).send({bool : false,msg :"아이디 또는 비밀번호를 확인하세요." })
        }
        const signUpData =await this.signService.createUser(id, pw, nickname)

        res.status(200).send(signUpData)
        
        
    }
    catch(err){
        next(err)
    }

    }
    //로그인
    singIn = async(req, res, next) => {
    try{
        const {id, pw} = req.body;
        const result =await this.signService.getLogin(id, pw);
        
        if(!result.token) {return res.status(400).send(result)}
        
        res.cookie("token", result.token, {
            maxAge: 60 * 60 * 1000,
        })
        
        return res.status(200).send(result)
    }
    catch(err){
        next(err)
    }
    }
}


module.exports =signClass
