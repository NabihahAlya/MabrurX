const express = require("express");
const cors = require("cors");
const sequelize = require("./database");
const User = require("./models/User");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/admin", require("./routes/admin"));

sequelize.sync({ alter: true }).then(() => {
  console.log("Database synced with model changes");
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
});
