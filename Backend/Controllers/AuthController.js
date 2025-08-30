import  RepoAuth from "../Repositories/AuthRepository.js";

class AuthController {
    async registerUser (req, res){
        try{
            const response = await RepoAuth.registerUser(req.body);
            return res.status(response.status).json(response.response)
        }catch(err){
            return res.status(500).json(err.message);
        }
    }

    async loginUser (req, res){
        try{
            const response =  await RepoAuth.loginUser(req.body);
            req.session.userId = response.userId;
            return res.status(response.status).json(response.response);
        }catch(err){
            return res.status(500).json(err.message);
        }
    }

    async logout(req, res){
        try{
            req.session.destroy();
            return res.status(200).send("You are logged out")
        }catch(err){
            return res.status(500).json(err.message);
        }
    }
}

export default new AuthController ();