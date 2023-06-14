import { NextFunction, Request, Response } from "express";
import ValidationError from "../../utils/error/validation_error";
import { responseErrorWithMessage } from "../../utils/response";

export default function errorHandlerMiddleware(
  error: Error,
  _: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof ValidationError) {
    return res.status(400).json(responseErrorWithMessage(error.message));
  }
  return res.status(400).json(responseErrorWithMessage());
}
