import RepoUser from "../Repositories/UserRepository.js";

class UserServices {
    async getAllUsersService (){
        try{
            return await RepoUser.getAllUsers();
        }catch(err){
            return {status: 500, response: "Error in service"}
        }
    }
}

export default new UserServices ();