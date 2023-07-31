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
          firstName: 'Имя',
          lastName: 'Фамилия',
          isAdmin: true,
        },
        {
          email: 'hr@mail.ru',
          password: hashPassword,
          firstName: 'Имя',
          lastName: 'Фамилия',
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
