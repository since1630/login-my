"use strict";
const express = require("express");
const router = express.Router();
const ctrl = require("./ctrl");

router.get("/", ctrl.view.index);
router.get("/login", ctrl.view.login);
router.get("/register", ctrl.view.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

// router.post("/login", ctrl.login);

module.exports = router;
