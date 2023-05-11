import express, { NextFunction, Request, Response } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import http from "http";
import { responseErrorWithMessage } from "@utils/response";
import MainRouter from "@routes/index";
import cors from "cors";
import morgan from "morgan";
import { config } from "dotenv";
import ValidationError from "./utils/error/validation_error";
import errorHandlerMiddleware from "./app/middleware/error_handler_middleware";
import notFoundHandlerMiddleware from "./app/middleware/not_found_handler_middleware";
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

app.use(notFoundHandlerMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || "5000";
app.set("port", PORT);
var server = http.createServer(app);
server.on("listening", () => console.log("APP IS RUNNING ON PORT " + PORT));

server.listen(PORT);
