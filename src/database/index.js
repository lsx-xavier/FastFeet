import Sequelize from 'sequelize';

import User from '../app/models/user';
import Recipient from '../app/models/recipients';

import databaseConfig from '../config/database';

const models = [User, Recipient];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
