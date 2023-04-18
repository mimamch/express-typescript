import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import http from "http";
import { responseErrorWithMessage } from "@utils/response";
import MainRouter from "@routes/index";
import cors from "cors";
import morgan from "morgan";
import { config } from "dotenv";
config();
var app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Public Path
app.use("/p", express.static(path.resolve("public")));
app.use("/p/*", (req, res) => res.status(404).send("Media Not Found"));

app.use(MainRouter);

app.use((req, res) => {
  res.status(404).json(responseErrorWithMessage("Page Not Found"));
});

const PORT = process.env.PORT || "5000";
app.set("port", PORT);
var server = http.createServer(app);
server.on("listening", () => console.log("APP IS RUNNING ON PORT " + PORT));

server.listen(PORT);
