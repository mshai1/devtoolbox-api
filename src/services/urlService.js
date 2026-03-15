const axios = require("axios");
const cheerio = require("cheerio");

const { client } = require("../utils/redisClient");

async function fetchMetadata(url) {
    const cacheKey = `metadata:${url}`;

    const cached = await client.get(cacheKey);

    if (cached) {
        console.log("Cache hit");
        return JSON.parse(cached);
    }

    console.log("Cache miss");

    const response = await axios.get(url);

    const html = response.data;
    const $ = cheerio.load(html);

    const title = $("title").text() || null;

    const description =
        $('meta[name="description"]').attr("content") ||
        $('meta[property=""og:description"]').attr("content") ||
        null;

    const image =
        $('meta[property="og:image"]').attr("content") || null;

    const favicon =
        $('link[rel="icon"]').attr("href") ||
        $('link[rel="shortcut icon"]').attr("href") ||
        null;

    const result = {
        title,
        description,
        image,
        favicon
    };

    await client.set(cacheKey, JSON.stringify(result), {
        EX: 3600
    });

    return result;
}

module.exports = {
    fetchMetadata
};