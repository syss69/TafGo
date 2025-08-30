class AuthMiddleware {
    async checkSessoin (req, res, next) {
        try{
            const userId = req.session.userId;
            if (!userId) return res.status(401).send("Authentification error");
            next();
        }catch(err){
            return res.status(500).json({message: err.message});
        }
    }
}

export default new AuthMiddleware();