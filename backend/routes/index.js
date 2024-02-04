const express = require("express");

const userRoutes = require("./user");
const accountRoutes = require("./account");

const router = express.Router();

router.use("/user", userRoutes);
router.use("/account", accountRoutes);

router.get("/", (req, res) => {
  res.json({ path: "/api/v1" });
});

module.exports = router;
