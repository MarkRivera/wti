const express = require("express");
const router = express.Router();

// Session Management:
router.post("/register", (req, res) => {
  res.send("This should register a user");
});

router.post("/login", (req, res) => {
  res.send("This should login the user");
});

router.post("/logout", (req, res) => {
  console.log("This should log out the user");
});

// User Data Management:

module.exports = router;
