const express = require("express");
const { registerUser, authUser } = require("../controllers/userController");
const router = express.Router();

router.route("/").post(registerUser).get(authUser)

module.exports = router;