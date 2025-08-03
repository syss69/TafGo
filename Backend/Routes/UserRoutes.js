import express from "express";

const router = express.Router();

router.get("/id/:id", (req, res) => {
    res.status(200).send(`You tring to have user with id ${req.params.id}. It is not finished yet`)
})

export default router;