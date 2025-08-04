import pool from "../Config/db.js"

class RepoUser {
    async getAllUsers () {
        let conn;
        try{
            conn = await pool.getConnection();
            const users = await conn.query("SELECT * FROM Users");
            return {status: 200, response: users};
        }catch(err){
            return {status: 500, response: err.message}
        }finally{
            if (conn) conn.end(); 
        }
    }
}

export default new RepoUser();