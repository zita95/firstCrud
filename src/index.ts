import * as express from 'express';
import { Application } from 'express';
import { router } from './app/routers';

const app: Application = express();
app.use(express.json());
const { PORT = 3000 } = process.env;
// const PORT = process.env.PORT || 3000;

app.use(router);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
