import "source-map-support/register";

import { config } from "dotenv";
config();

import http from "http";
import createServer from "./server";
import { isProduction } from "./defaults/config";

const app = createServer();

const port = parseInt(process.env.PORT || "3000");
app.set("port", port);
const server = http.createServer(app);

server.on("error", (err) => console.log(err));
server.on("listening", () => {
  if (!isProduction) {
    console.log("Server Running on http://localhost:" + port);
  }
});
server.listen(port);
