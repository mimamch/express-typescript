import ProductTypes from "@/types/ProductTypes";
import ValidationError from "@/utils/error/validation_error";
import {
  responseErrorWithMessage,
  responseSuccessWithData,
} from "@/utils/response";
import { NextFunction, Request, Response } from "express";

// function based controller
export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data: ProductTypes[] = [
      {
        id: 1,
        product_name: "Car",
      },
      {
        id: 2,
        product_name: "Motorcycle",
      },
    ];

    // response success with a data
    res.status(200).json(responseSuccessWithData(data));
  } catch (error) {
    // send to error handler
    next(error);
  }
};
