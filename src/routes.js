import { Router } from 'express';

import SessionLogin from './app/controllers/SessionLogin';

const routes = new Router();

routes.get('/', (req, res) => {
  res.send('Start Project');
});

routes.post('/login', SessionLogin.store);

export default routes;
