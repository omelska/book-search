console.log("iside saved books route");
const router = require("express").Router();

router.get("/saved", (req, res) => {
  console.log("Inside save");
});

module.exports = router;
