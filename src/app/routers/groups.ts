import { Router } from 'express';
import * as groupController from '../controllers/groups';

export const router: Router = Router({ mergeParams: true });

router.use(groupController.auth);
router.get('/group', groupController.index);
router.post('/group', groupController.create);
router.get('/group/:id', groupController.show);
router.delete('/group/:id', groupController.destroy);
router.put('/group/:id', groupController.update);