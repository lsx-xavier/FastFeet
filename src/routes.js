import { Router } from 'express';

import SessionLogin from './app/controllers/sessionLogin';
import RecipientController from './app/controllers/createRecipients';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => {
  res.send('Start Project');
});

routes.post('/login', SessionLogin.store);

routes.use(authMiddleware);

routes.post('/recipients', RecipientController.store);
routes.post('/recipients/:id', RecipientController.update);

export default routes;
