import express from 'express';

const router = express.Router();

router.get("*", (req, res) => res.render("route404"));

export default router;