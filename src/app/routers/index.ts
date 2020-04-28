import { router as userRouter } from './users';
import { router as groupRouter } from './groups';
import { Router } from 'express';

export const router: Router = Router({ mergeParams: true });
router.use(userRouter);
router.use(groupRouter);