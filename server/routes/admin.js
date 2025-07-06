const express = require("express");
const verifyToken = require("../middleware/authMiddleware");
const authorizeRole = require("../middleware/authorizeRole");

const router = express.Router();

router.get("/admin/dashboard", verifyToken, authorizeRole("admin"), (req, res) => {
  res.json({ message: "Welcome to the Admin Dashboard!" });
});

module.exports = router;
