const express = require("express");
const router = express.Router();

const hashController = require("../controllers/hashController");

router.post("/", hashController.generate);

module.exports = router;