import { response } from "express";
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
            if (conn) conn.release(); 
        }
    }

    async getUserById(id){
        let conn;
        try{
            conn = await pool.getConnection();
            const rows = await conn.query(`SELECT * FROM Users WHERE id = ?`, [id]);
            if (rows.length > 0) {
                const user = rows[0];
                delete user.password;
                return { status: 200, response: user };
            } else {
                return { status: 404, response: "User not found" };
            }
        }catch(err){
            console.log(err)
            return {status: 500, response: err.message}
        }finally{
            if (conn) conn.release(); 
        }
    }
    async loginUser(credentials){
        let conn;
        try{
            const {email, password} = credentials;
            const rows = await pool.query('SELECT * FROM Users WHERE email = ?  AND password = ? ', [email, password]);
            if (rows.length > 0){
                return {status: 200, response: "Authorized"}
            }else{
                return {status: 401, response: "User do not exists or password is invalid"}
            }
        }catch(err){
            console.log(err)
            return {status: 500, response: err.message}
        }finally{
            if (conn) conn.release(); 
        }
    }
}

export default new RepoUser(); 