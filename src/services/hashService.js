const crypto = require("crypto");

function generateHash(text, algorithm) {
    return crypto
        .createHash(algorithm)
        .update(text)
        .digest("hex");
}

module.exports = {
    generateHash
};