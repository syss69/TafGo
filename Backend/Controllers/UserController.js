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

    async getUserById(req, res) {
        try{
            const response = await UserService.getUserByIdService(req.params.id);
            return res.status(response.status).json(response.response)
        }catch(err){
            return res.status(500).json(err.message)
        }
    }

    async loginUser(req, res) {
        try{
            const response = await UserService.loginUserService(req.body);
            return res.status(response.status).json(response.response);
        }catch(err){
            return res.status(500).json(err.message);
        }
    } 
}

export default new UserController();