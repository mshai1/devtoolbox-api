const base64Service = require("../services/base64Service");

function encode(req, res) {
    const { text } = req.body;

    const encoded = base64Service.encode(text);

    res.json({ encoded });
}

function decode(req, res) {
    const { text } = req.body;

    const decoded = base64Service.decode(text);

    res.json({ decoded });
}

module.exports = { 
    encode,
    decode
};