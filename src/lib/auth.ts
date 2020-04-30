import { Request, Response, NextFunction } from "express";
import { User } from "../app/models/users";
import * as jwt from 'jsonwebtoken';
import { database } from "./database";
import * as jwtConfig from '../../config/jwt.json';

export const authentication = async (req: Request, res: Response, next: NextFunction) => {
  
  if ((req.path.endsWith('/user') || req.path.endsWith('/login')) && req.method === 'POST') {
    return next();
  }
  try {
    const token = req.headers.authorization.split(' ')[1];
    const info = jwt.verify(token, jwtConfig.secret);
    const userID: number = info.userID;
    const user: User = await database('users').where({ id: userID }).first()
    res.locals.user = user;
    next();
  } catch (error) {
    res.sendStatus(401);
  }
}