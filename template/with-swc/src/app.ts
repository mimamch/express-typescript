import express, { NextFunction, Request, Response } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import { responseErrorWithMessage } from "@utils/response";
import MainRouter from "@routes/index";
import cors from "cors";
import morgan from "morgan";
import ValidationError from "./utils/error/validation_error";
import errorHandlerMiddleware from "./app/middleware/error_handler_middleware";
import notFoundHandlerMiddleware from "./app/middleware/not_found_handler_middleware";
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

export default app;
