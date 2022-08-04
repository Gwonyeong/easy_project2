const {User} = require("../models") //유저 데이터베이스
const jwt = require("jsonwebtoken") 

class signClass{
   
    getUser(id){
        const user = User.findAll({
            where : {id}
        })
        if(user){
            return true //데이터 베이스에 같은 아이디가 있다면 true
        }else{
            return false
        }
    }
           
       
    
    
    
    signUp = async(req, res, next) => {
    

    }
    
    singIn = async(req, res, next) => {
    
    }
}


module.exports = {
    signClass
}