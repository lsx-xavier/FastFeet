module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('recipients', {
      id: {
        type: Sequelize.INTEGER,
        allowNul: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNul: false,
      },
      rua: {
        type: Sequelize.STRING,
        allowNul: false,
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNul: false,
      },
      complemento: {
        type: Sequelize.STRING,
        allowNul: false,
      },
      estado: {
        type: Sequelize.STRING,
        allowNul: false,
      },
      cidade: {
        type: Sequelize.STRING,
        allowNul: false,
      },
      cep: {
        type: Sequelize.INTEGER,
        allowNul: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('recipients');
  },
};
