import { User } from '../models/users';
import { database } from '../../lib/database';
import { Request, Response } from 'express';


export const index = async (req: Request, res: Response) => {
  const users: Array<User> = await database('users').select();
  res.json(users);
};

export const show = async (req: Request, res: Response) => {
  try {
    const user: User = await database('users').select().where({ id: req.params.id }).first();
    if (user) {
      res.json(user);
    } else {
      res.sendStatus(404);
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const user: User = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      age: req.body.age,
      groupID: req.body.groupID
    }
    await database('users').insert(user);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const user: User = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      age: req.body.age
    };
    await database('users').update(user).where({ id: req.params.id });
    res.send(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const destroy = async (req: Request, res: Response) => {
  try {
    await database('users').delete().where({ id: req.params.id });
    res.send(204);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

