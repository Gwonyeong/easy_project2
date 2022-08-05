const {User} = require('../models')
const jwt = require("jsonwebtoken")
const env = process.env;

class signRepository{
    signRepository = new signRepository();

    findDupId = async(id) =>{
        const dup_id = await User.findOne({
            where : {id}
        });

        return dup_id;
    }

    createUser = async(id, pw, nickname) =>{
        const password = json.sign(pw, env.secretKey);

        await User.create({
            id, pw:password , nickname
        })
        return {
            msg : "회원가입을 축하드립니다."
        }
    }

    loginUser = async(id ) => {
        const loginData = await User.findOne({
            where : {id}
        })
        return loginData
        
    }

}

module.exports = {
    signRepository
}