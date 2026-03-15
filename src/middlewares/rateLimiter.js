const rateLimitWindow = 60 * 1000;
const maxRequest = 10;
const ipStore = new Map();

function rateLimiter(req, res, next) {
    const ip = req.ip;

    const now = Date.now();
    const record = ipStore.get(ip) || { count:0, startTime: now };

    if(now - record.startTime > rateLimitWindow) {
        record.count = 1;
        record.startTime = now;
        ipStore.set(ip, record);
        return next();
    }

    if(record.count >= maxRequest) {
        return res.status(429).json({
            error: "Too many requests. Try again later."
        })
    }

    record.count += 1;
    ipStore.set(ip, record);
    next();
}

module.exports = rateLimiter;