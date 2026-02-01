import express from "express";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/home", protect, (req, res) => {
  res.json({ message: "Protected Home Access" });
});

export default router;
