import UserService from "../Services/UserService.js";

class UserController {
    async getAllUsers (req, res) {
        try{
            const users = await UserService.getAllUsersService();
            return res.status(users.status).json(users.response);
        }catch(err){
            return res.status(500).json(err.message)
        }
    }
}

export default new UserController();