import { router as userRouter } from './users';
import { router as groupRouter } from './groups';
import { router as loginRouter } from './login';
import { Router } from 'express';

export const router: Router = Router({ mergeParams: true });
router.use(loginRouter);
router.use(userRouter);
router.use(groupRouter);
