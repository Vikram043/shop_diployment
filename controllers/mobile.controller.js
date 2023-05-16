const express = require("express");

const router = express.Router();

const Mobile = require("../models/mobile.model");

const mobileController = require("../controllers/crud.controller");

const authenticate = require("../middleware/authenticate");

router.get("", mobileController(Mobile).get);

router.post("", mobileController(Mobile).post);

router.get("/:id", mobileController(Mobile).getOne);

router.patch("/:id", authenticate, mobileController(Mobile).patch);

router.delete("/:id", authenticate, mobileController(Mobile).delete);

module.exports = router;
