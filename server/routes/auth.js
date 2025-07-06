const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  try {
    console.log("Register req.body:", req.body);

    const { name, email, password, phone, address } = req.body;

    // Validasi input
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email, and password are required" });
    }

    // Cek apakah email sudah dipakai
    const exists = await User.findOne({ where: { email } });
    if (exists) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Hash password dan buat user
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed, phone, address });

    // Buat token JWT
    const token = jwt.sign(
      { id: user.id, role: user.role || "user" }, // fallback role
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    // Kirim response
    res.json({
      user: { id: user.id, name: user.name, email: user.email, role: user.role || "user" },
      token,
    });
  } catch (err) {
    console.error("Error saat register:", err.message);
    console.error(err.stack);
    res.status(500).json({ message: "Internal server error (register)" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    console.log("Login req.body:", req.body);

    const { email, password } = req.body;

    // Validasi input
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Cari user
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Cek password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Buat token
    console.log("JWT_SECRET dari env:", process.env.JWT_SECRET);

    const token = jwt.sign({ id: user.id, role: user.role || "user" }, process.env.JWT_SECRET, { expiresIn: "2h" });

    // Kirim response
    res.json({
      user: { id: user.id, name: user.name, email: user.email, role: user.role || "user", createdAt: user.createdAt },
      token,
    });
  } catch (err) {
    console.error("Error saat login:", err.message);
    console.error(err.stack);
    res.status(500).json({ message: "Internal server error (login)" });
  }
});

module.exports = router;
