const PORT = process.env.PORT || 9000;
const apiRoutes = require("./api/api");

// Modules
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

// Middleware
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api", apiRoutes);

// Error Handler
server.use((err, req, res, next) => {
  console.error(err);

  res
    .status(500)
    .json({ message: "There was an error performing the required operation" });
});

server.use(function (req, res) {
  res.status(404).send("Ain't nobody got time for that!");
});

// using port 9000 for this example
server.listen(PORT, () => console.log("API running on port 9000"));
