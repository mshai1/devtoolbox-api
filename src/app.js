const express = require("express");
const morgan = require("morgan");

const { loadRoutes } = require("./loaders/routes");
const { connectRedis } = require("./utils/redisClient");

//const logger = require("./middlewares/logger");
const rateLimiter = require("./middlewares/rateLimiter");
const errorHandler = require("./middlewares/errorHandler");


const app = express();

//Parse JSON
app.use(express.json());

//Logger middleware
app.use(morgan("dev"));

//Rate limiter middleware
app.use(rateLimiter);

//Load all routes
loadRoutes(app);

//Error handling middleware (last!)
app.use(errorHandler);

const PORT = 3000;
async function startServer() {
    await connectRedis;

    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
}

startServer();
