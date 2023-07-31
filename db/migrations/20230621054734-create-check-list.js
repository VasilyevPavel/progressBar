'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CheckLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      employName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mentorName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      progress: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id',
        },
      },
      sid: {
        type: Sequelize.STRING,
      },
      q1: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q2: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q3: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q4: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q5: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q6: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q7: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q8: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      questionInputValue: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      q9: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q10: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q11: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q12: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CheckLists');
    await queryInterface.dropTable('Users');
  },
};
