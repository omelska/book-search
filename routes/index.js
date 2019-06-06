const path = require("path");
const express = require("express");
const router = express.Router();
const apiRoutes = require("./api/index.js");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
