import ProductTypes from "@/types/ProductTypes";
import ValidationError from "@/utils/error/validation_error";
import {
  responseErrorWithMessage,
  responseSuccessWithData,
} from "@/utils/response";
import { Request, Response } from "express";

// function based controller
export const getProducts = async (req: Request, res: Response) => {
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
    if (error instanceof ValidationError) {
      // response on custom error
      return res.status(400).json(responseErrorWithMessage(error.message));
    }
    // response on default error
    res.status(500).json(responseErrorWithMessage());
  }
};
