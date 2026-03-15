const express = require("express");
const router = express.Router();

const urlController = require("../controllers/urlController");

router.post("/metadata", urlController.metadata);

module.exports = router;