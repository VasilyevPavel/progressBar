'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashPassword = await bcrypt.hash('1', 10);
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'admin@mail.ru',
          password: hashPassword,
          firstName: 'Сергей',
          lastName: 'Прокудин-Горский',
          isAdmin: true,
        },
        {
          email: 'hr@mail.ru',
          password: hashPassword,
          firstName: 'Екатерина',
          lastName: 'Апраксина',
          isAdmin: false,
        },
        {
          email: 'hatori@mail.ru',
          password: hashPassword,
          firstName: 'Валентин',
          lastName: 'Федоров',
          isAdmin: false,
        },
        {
          email: 'faramir@gmail.com',
          password: hashPassword,
          firstName: 'Пётр',
          lastName: 'Смекайлов',
          isAdmin: false,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  },
};
