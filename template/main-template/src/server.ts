import express from "express";
import * as path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import errorHandlerMiddleware from "./app/middleware/error_handler_middleware";
import notFoundHandlerMiddleware from "./app/middleware/not_found_handler_middleware";
import MainRouter from "./app/routes";
import { isProduction } from "./defaults/config";

const createServer = () => {
  var app = express();
  if (!isProduction) app.use(logger("dev"));
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

  return app;
};

export default createServer;
