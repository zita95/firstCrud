import { User } from '../models/users';
import { database } from '../../lib/database';
import { Request, Response } from 'express';
import * as userSer from '../serializers/user';
import  * as jwt from 'jsonwebtoken';
import * as jwtConfig from '../../../config/jwt.json';
import * as loginSerializer from '../serializers/login';
import * as crypt from 'bcrypt';


export const create = async (req: Request, res: Response) => {
  try {
    const user: User = await database('users').select().where({ email: req.body.email }).first();
    if (user && crypt.compareSync(req.body.password, user.paassword)) {
      const info = { userID: user.id };
      const token = jwt.sign(info, jwtConfig.secret);
      res.json(loginSerializer.create(token, user));
      res.json(userSer.show(user));
    } else {
      res.sendStatus(404);
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

