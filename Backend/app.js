import express from "express";
import session from "express-session";
import dotenv from 'dotenv';

import userRoutes from "./Routes/UserRoutes.js"
import authRoutes from "./Routes/AuthRoutes.js"

dotenv.config();
const app = express();
const port = 3000;

app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 1000 * 60 * 60
  }
}));

app.get("/", (req, res) => {
    res.status(200).send("OK")
})

app.get("/check-session", (req, res) => {
  res.json(req.session.userId);
});

app.use("/user", userRoutes);

app.use("/auth", authRoutes);

app.listen(port, () => {
    console.info(`Server is running on http://localhost:${port}`)
})