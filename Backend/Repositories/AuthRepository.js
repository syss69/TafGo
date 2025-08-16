import pool from "../Config/db.js";
import argon2 from "argon2";

class RepoAuth {

async registerUser(data){
    let conn;
    try {
        const { role, name, email, password, description } = data;
        const rows = await pool.query(
            "SELECT id FROM Users WHERE email = ?",
            [email]
        );
        if (rows.length > 0) {
            return {status: 409, response: "User with this email already exists"};
        }
        const hashedPassword = await argon2.hash(password);
        await pool.query(
            "INSERT INTO Users (role, name, email, password, description) VALUES (?, ?, ?, ?, ?)",
            [role, name, email, hashedPassword, description]
        );
        return {status: 201,response: "User registered successfully"};
    } catch (err) {
        console.error(err);
        return { status: 500, response: err.message };
    } finally {
        if (conn) conn.release(); 
    }
} 
    
async loginUser(credentials){
        let conn;
        try{
            const {email, password} = credentials;
            const rows = await pool.query('SELECT * FROM Users WHERE email = ? ', [email]);
            if (rows.length < 1){
                return {status: 401, response: "User do not exists or password is invalid"};
            }else{
                if( await argon2.verify(rows[0].password, password)){
                    return {status: 200, response: "Authorized"}
                }else{
                    return {status: 401, response: "User do not exists or password is invalid"};
                }
            }
        }catch(err){
            console.log(err)
            return {status: 500, response: err.message}
        }finally{
            if (conn) conn.release(); 
        }
    }
};

export default new RepoAuth();