const {User} = require('../models')


class signRepository{
    

    findDupId = async(id) =>{
        const dup_id = await User.findOne({
            where : {id}
        });

        return dup_id;
    }

    createUser = async(id, pw, nickname) =>{
        

        await User.create({
            id, pw , nickname
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

module.exports =  signRepository
