const express = require("express");
const router = express.Router();

const base64Controller = require("../controllers/base64Controller");

router.post("/encode", base64Controller.encode);
router.post("/decode", base64Controller.decode);

router.get("/test", (req, res) => {
    console.log("Base64 test endpoint hit");
    res.json({
        message: "Base64 route working"
    });
});

module.exports = router;