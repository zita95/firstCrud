import { Group } from '../models/groups';
import { database } from '../../lib/database';
import { Request, Response, NextFunction } from 'express';


export const auth = (req: Request, res: Response, next: NextFunction) => {
  if (res.locals.user.role === 'admin' || res.locals.user.role === 'user') {
    next();
  } else {
    res.sendStatus(403);
  }
}

export const index = async (req: Request, res: Response) => {
  try {
    const groups: Array<Group> = await database('groups').select();
    res.json(groups);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    const result = await database('groups').select().where({ id: req.params.id }).first();
    if (result) {
      res.json(result);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const group: Group = {
      name: req.body.name,
      description: req.body.description,
      location: req.body.location,
      maxSize: req.body.size
    };
    await database('groups').insert(group);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const result = await database('groups').select().where({ id: req.params.id });
    const newResult: Group = {
      name: req.body.name,
      description: req.body.description,
      location: req.body.location,
      maxSize: req.body.size
    };
    await database('groups').update(newResult).where({ id: req.params.id });
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const destroy = async (req: Request, res: Response) => {
  try {
    const result = await database('groups').select().where({ id: req.params.id });
    if (result) {
      await database('groups').where({ id: req.params.id }).del();
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};