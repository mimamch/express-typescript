import UserTypes from "@/types/UserTypes";
import ValidationError from "@/utils/error/validation_error";
import {
  responseErrorWithMessage,
  responseSuccessWithData,
} from "@/utils/response";
import { Request, Response } from "express";

// class based controller
export default abstract class UserControllers {
  // new controller instance
  static getUsers = async (req: Request, res: Response) => {
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
      if (error instanceof ValidationError) {
        // response on custom error
        return res.status(400).json(responseErrorWithMessage(error.message));
      }
      // response on default error
      res.status(500).json(responseErrorWithMessage());
    }
  };
}
