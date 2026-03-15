const { redisClient, createClient } = require("redis");

const client = createClient({
    url: "redis://localhost:6379"
});

client.on("error", (err) => {
    console.error("Redis error", err);
});

async function connectRedis() {
    if(!client.isOpen) {
        await client.connect();
        console.log("Redis Connected");
    }
}

module.exports = {
    client,
    connectRedis
};