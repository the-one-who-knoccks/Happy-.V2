import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphangesController from './controllers/OrphanagesController';
import UserController, { login } from './controllers/UserController';

import { auth } from './middlewares/auth';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/users', UserController.create);

routes.post('/session', login);
routes.use(auth);
routes.get('/orphanages', OrphangesController.index);
routes.get('/orphanages/:id', OrphangesController.show);

routes.post('/orphanages', upload.array('images'), OrphangesController.create);

export default routes;
