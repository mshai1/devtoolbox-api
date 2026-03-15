const urlService = require("../services/urlService");

async function metadata(req, res, next) {
    try {
        const { url } = req.body || {};

        if(!url) {
            return res.status(400).json({
                error: "url is required"
            });
        }
        
        const data = await urlService.fetchMetadata(url);

        res.json(data);

    } catch (error) {
        next(error);
    }
}

module.exports = {
    metadata
};