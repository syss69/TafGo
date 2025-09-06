import express from "express";
import session from "express-session";
import dotenv from 'dotenv';

import userRoutes from "./Routes/UserRoutes.js"
import authRoutes from "./Routes/AuthRoutes.js"

import { sessionMiddleware } from "./Config/sessionStore.js";

dotenv.config();
const app = express();
const port = 3000;

app.use(express.json());

app.use(sessionMiddleware);

app.get("/", (req, res) => {
    res.status(200).send("OK")
}) 

app.get("/check-session", (req, res) => {
  if(req.session.userId) return res.json(req.session.userId)
  else return res.status(401).send("Unauthorized")
});

app.use("/user", userRoutes);

app.use("/auth", authRoutes);

app.listen(port, () => {
    console.info(`Server is running on http://localhost:${port}`)
})