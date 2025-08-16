import express from "express";
import AuthController from "../Controllers/AuthController.js";

const router = express.Router();

router.post("/user/login", AuthController.loginUser);

router.post("/user/register", AuthController.registerUser);

export default router;