import { Request, Response } from "express";

export function hello(req: Request, res: Response){
    res.status(200).json({text: 'hello'})
}