const express = require("express");
const { create, authenticate } = require("../controllers/UserController");
const router = express.Router();
const userController = require("../controllers/UserController");

router.post("/register", userController.create);
router.post("/authenticate", userController.authenticate);

module.exports = router;
