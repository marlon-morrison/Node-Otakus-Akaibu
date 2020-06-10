const express = require("express");
const router = express.Router();

router.use("/Acharacters",require("./api/AcharacterRoutes"));
// router.use("/user",require("./api/userRoutes"));

module.exports = router;