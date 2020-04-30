import * as express from 'express';
import { Application } from 'express';
import { router } from './app/routers';
import { router as groupUserRouter } from './app/routers/groupUser';
import { authentication } from './lib/auth';
import * as createMiddleware from 'swagger-express-middleware';
import { SwaggerMiddleware } from 'swagger-express-middleware';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../config/swagger.json';

const app: Application = express();
app.use(express.json());

// const PORT = process.env.PORT || 3000;

createMiddleware('config/swagger.json', app, (err, middleware: SwaggerMiddleware) => {
  if (err) {
    console.log(err);
  }

  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use(middleware.metadata);
  app.use(middleware.CORS());
  app.use(middleware.parseRequest());
  app.use(middleware.validateRequest());

  const { PORT = 3000 } = process.env;

  app.use(authentication);
  app.use(router);
  app.use(groupUserRouter);

  app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
  });
});
