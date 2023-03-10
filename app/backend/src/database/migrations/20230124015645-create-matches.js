'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      homeTeam: {
        field: 'home_team_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'teams',
          key: 'id'
        }
      },
      homeTeamGoals: {
        field: 'home_team_goals',
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      awayTeamGoals: {
        field: 'away_team_goals',
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      awayTeam: {
        field: 'away_team_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'teams',
          key: 'id'
        }
      },
      inProgress: {
        field: 'in_progress',
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
    });
    },

    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('matches');
  }
};
