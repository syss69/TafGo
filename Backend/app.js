import express from "express";
import userRoutes from "./Routes/UserRoutes.js"

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.status(200).send("OK")
})

app.use("/user", userRoutes);

app.listen(port, () => {
    console.info(`Server is running on http://localhost:${port}`)
})