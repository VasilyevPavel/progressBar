const { renderTemplate } = require('../lib/renderTemplate');
const Login = require('../views/pages/Login');
const UsersList = require('../views/pages/UsersList');
const CreateUser = require('../views/pages/CreateUser');
const UpdateUser = require('../views/pages/UpdateUser');
const { User, CheckList } = require('../../db/models');

module.exports.renderLogin = (req, res) => {
  try {
    renderTemplate(Login, {}, req, res);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

module.exports.renderUsersList = async (req, res) => {
  try {
    const allUsers = await User.findAll({
      raw: true,
      order: [['createdAt', 'ASC']],
    });
    renderTemplate(UsersList, { allUsers }, req, res);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

module.exports.renderCreateUser = async (req, res) => {
  try {
    renderTemplate(CreateUser, {}, req, res);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

module.exports.renderUpdateUser = async (req, res) => {
  try {
    const { userid } = req.params;

    const currentUser = await User.findByPk(userid, { raw: true });

    renderTemplate(UpdateUser, { currentUser }, req, res);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
