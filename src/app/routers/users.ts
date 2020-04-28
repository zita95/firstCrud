import { Router } from 'express';
import * as userController from '../controllers/users';

export const router: Router = Router({ mergeParams: true });

router.get('/user', userController.index);
router.get('/user/:id', userController.show);
router.post('/user', userController.create);
router.delete('/user/:id', userController.destroy);
router.put('/user/:id', userController.update);
