import { Router } from 'express';

import SessionLogin from './app/controllers/sessionLogin';
import CreateRecipient from './app/controllers/createRecipients';

const routes = new Router();

routes.get('/', (req, res) => {
  res.send('Start Project');
});

routes.post('/login', SessionLogin.store);

routes.post('/recipients', CreateRecipient.store);

export default routes;
