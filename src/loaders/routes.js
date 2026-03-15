const fs = require("fs");
const path = require("path");

function loadRoutes(app) {
    const routesPath = path.join(__dirname, "../routes");
    const files = fs.readdirSync(routesPath);

    files.forEach((file) => {
        if(!file.endsWith("Routes.js")) return;

        const routeModule = require(path.join(routesPath, file));

        if(typeof routeModule != "function") {
            console.warn(`Skipping ${file} (no router exported)`);
            return;
        }

        const routeName = file.replace("Routes.js", "").toLowerCase();

        console.log(`Loading route: /api/v1/${routeName}`);
        app.use(`/api/v1/${routeName}`, routeModule);
    });
}

module.exports = { loadRoutes };