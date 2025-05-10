import app from "./src/app.js";
import http from "http";
import config from "./src/config/config.js";
import db from "./src/db/db.js"
db();

const server = http.createServer(app);
const port = config.PORT || 3000;

server.listen(port , ()=>{
    console.log(`server is running on port ${port}`);
})