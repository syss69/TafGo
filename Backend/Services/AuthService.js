import  RepoAuth from "../Repositories/AuthRepository.js";

class AuthServices {
    async registerService (credentials){
        try{
            return await RepoAuth.registerUser(credentials);
        }catch(err){
            return {status: 500, response: "Error in service"}
        }
    }

    async loginService (){
        try{
            return await RepoAuth.loginUser(credentials);
        }catch(err){
            return {status: 500, response: "Error in service"}
        }
    }
}

export default new AuthServices ();