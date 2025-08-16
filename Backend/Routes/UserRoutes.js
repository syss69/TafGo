import express from "express";
import UserController from "../Controllers/UserController.js";

const router = express.Router();

router.get("/id/:id", UserController.getUserById);

router.get("/all", UserController.getAllUsers);

router.post("/login", UserController.loginUser);

export default router;