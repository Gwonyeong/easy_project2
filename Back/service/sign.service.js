const signRepository = require('../repository/signRepository')


class SignService {
    signRepository = new signRepository();

    dupUserSearch = async (userId) => {
        //User의 데이터베이스에서 인자로 받는 id값을 이용해 중복되는 
        //id가 있는지 확인하는 함수. 
        //return 중복되는 아이디가 있다면 true 없다면 false
        try{
            const id = userId;
            const dup_user = await this.signRepository.findDupId(id);
            if(dup_user){
                return {
                    bool : true,
                    msg : "중복되는 아이디가 있습니다."
                }
            }else return{
                bool : false,
                msg : "이용 가능한 아이디 입니다."
            }
        }catch(err){
            next(err)
        }
    }

    createUser = async (id, pw, nickname) => {
        //id와 pw를 이용해 회원가입을 하는 함수.
        //return값은 msg : "회원가입을 축하드립니다."
        const createUserDate = await this.signRepository.createUser(id, pw)

        return createUserDate
    }

    getLogin = async (id, pw) => {
        const loginData = await this.signRepository.loginUser(id)
        if(pw === jwt.verify(loginData.pw, env.secretKey)){
            return {
                bool : true
                
            }
        }else{
            return {
                bool : false
            }
        }
    }
}

module.exports = {
    SignService
}