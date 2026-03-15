const hashService = require("../services/hashService");

function generate(req, res, next) {
    try {
        const { text, algorithm } = req.body || {};

        if(!text || !algorithm) {
            return res.status(400).json({
                error: "text and algorithm are required"
            });
        }

        const supportedAlgorithms = ["md5", "sha1", "sha256"];

        if(!supportedAlgorithms.includes(algorithm)) {
            return res.status(400).json({
                error: "Unsupported algorithm"
            });
        }

        const hash = hashService.generateHash(text, algorithm);

        res.json({ hash });

    } catch (error) {
        next(error);
    }
}

module.exports = {
    generate
};