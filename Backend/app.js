import express from "express";
import userRoutes from "./Routes/UserRoutes.js"
import authRoutes from "./Routes/AuthRoutes.js"

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("OK")
})

app.use("/user", userRoutes);

app.use("/auth", authRoutes);

app.listen(port, () => {
    console.info(`Server is running on http://localhost:${port}`)
})