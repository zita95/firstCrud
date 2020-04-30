import { Router } from 'express';
import * as groupUserController from '../controllers/users';

export const router: Router = Router({ mergeParams: true });

router.get('/group/:groupID/user', groupUserController.index);
router.get('/group/:groupID/user/:id', groupUserController.show);
router.post('/group/:groupID/user', groupUserController.create);
router.delete('/group/:groupID/user/:id', groupUserController.destroy);
router.put('/group/:groupID/user/:id', groupUserController.update);
