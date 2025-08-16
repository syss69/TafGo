import RepoUser from "../Repositories/UserRepository.js";

class UserServices {
    async getAllUsersService (){
        try{
            return await RepoUser.getAllUsers();
        }catch(err){
            return {status: 500, response: "Error in service"}
        }
    }

    async getUserByIdService(data){
        try{
            return await RepoUser.getUserById(data);
        }catch(err){
            return {status: 500, response: "Error in service"}
        }
    }

    async loginUserService(data){
        try{
            return await RepoUser.loginUser(data);
        }catch(err){ 
            return {status: 500, response: "Error in service"}
        }
    }
}

export default new UserServices ();