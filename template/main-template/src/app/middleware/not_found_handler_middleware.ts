import { responseErrorWithMessage } from "@/utils/response";
import { Request, Response } from "express";

export default function notFoundHandlerMiddleware(req: Request, res: Response) {
  return res.status(404).json(responseErrorWithMessage("Page Not Found"));
}
