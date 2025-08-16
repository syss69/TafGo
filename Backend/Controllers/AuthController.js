import  RepoAuth from "../Repositories/AuthRepository.js";

class AuthController {
    async register (req, res){
        try{
            const response = await RepoAuth.registerUser(req.body);
            return res.status(response.status).json(response.response)
        }catch(err){
            return res.status(500).json(err.message);
        }
    }

    async login (req, res){
        try{
            const response =  await RepoAuth.loginUser(req.body);
            return res.status(response.status).json(response.response);
        }catch(err){
            return res.status(500).json(err.message);
        }
    }
}

export default new AuthController ();