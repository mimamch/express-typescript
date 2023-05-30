import UserTypes from "@/types/UserTypes";
import ValidationError from "@/utils/error/validation_error";
import {
  responseErrorWithMessage,
  responseSuccessWithData,
} from "@/utils/response";
import { NextFunction, Request, Response } from "express";

// class based controller
export default abstract class UserControllers {
  // new controller instance
  static getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: UserTypes[] = [
        {
          id: 1,
          username: "John Doe",
        },
        {
          id: 2,
          username: "Jane Doe",
        },
      ];

      // response success with a data
      res.status(200).json(responseSuccessWithData(data));
    } catch (error) {
      // send to error handler
      next(error);
    }
  };
}
