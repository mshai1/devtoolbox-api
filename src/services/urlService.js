const axios = require("axios");
const cheerio = require("cheerio");

async function fetchMetadata(url) {
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

    return {
        title,
        description,
        image,
        favicon
    };
}

module.exports = {
    fetchMetadata
};