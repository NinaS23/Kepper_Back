import httpStatus from "../utils/httpStatus";
import { NextFunction, Request, Response } from "express";

export default async function errorHandler(error: { code: string; message: string; }, req: Request, res: Response, next: NextFunction) {
   if(error.code === "not-found"){
    return res.status(httpStatus.NOT_FOUND).send(error.message)
   }
   if(error.code === "unauthorized"){
    return res.status(httpStatus.UNAUTHORIZED).send(error.message)
   }
   if(error.code === "no-content"){
    return res.status(httpStatus.NO_CONTENT).send(error.message)
   }
   if(error.code === "unprocessable_entity"){
     return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message)
   }
    
   console.log(error)
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    
  }