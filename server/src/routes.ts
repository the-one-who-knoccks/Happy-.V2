import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphangesController from './controllers/OrphanagesController';
import UserController from './controllers/UserController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphangesController.index);
routes.get('/orphanages/:id', OrphangesController.show);
routes.post('/users', UserController.create);
routes.post('/orphanages', upload.array('images'), OrphangesController.create);

export default routes;
