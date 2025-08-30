import express from "express";
import UserController from "../Controllers/UserController.js";
import authMiddleware from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.get("/id/:id", UserController.getUserById);

router.get("/all", authMiddleware.checkSessoin, UserController.getAllUsers);

router.post("/login", UserController.loginUser);

export default router;