import * as express from 'express';
import { Request, Response, Application } from 'express';
/* import * as createMiddleware from 'swagger-express-middleware';
import { SwaggerMiddleware } from 'swagger-express-middleware'; */
import { database } from './lib/database';

const app: Application = express();
app.use(express.json());
const { PORT = 3000 } = process.env;
// const PORT = process.env.PORT || 3000;

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  created_at: string;
  updated_at: string;
}

app.get('/', async (req: Request, res: Response) => {
  res.json({
    message: 'hello world',
  });
});

app.get('/user', async (req: Request, res: Response) => {
  const users: Array<User> = await database('users').select();
  res.json(users);
});

app.get('/user/:id', async (req: Request, res: Response) => {
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
});

app.post('/user', async (req: Request, res: Response) => {
  try {
    const user: User = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      age: req.body.age
    }
    await database('users').insert(user);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.delete('/user/:id', async (req: Request, res: Response) => {
  try {
    await database('users').delete().where({ id: req.params.id });
    res.send(204);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.put('/user/:id', async (req: Request, res: Response) => {
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
})

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});