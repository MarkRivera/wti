const express = require("express");
const userRoutes = require("./routes/UserRoutes");

const router = express.Router();

router.use("/users", userRoutes);

module.exports = router;
