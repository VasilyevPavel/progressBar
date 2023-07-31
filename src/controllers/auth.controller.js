const { UniqueConstraintError } = require('sequelize');
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

module.exports.register = async (req, res) => {
  try {
    const { email, password, firstName, lastName, isAdmin } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    const user = (
      await User.create({
        email,
        password: hashPassword,
        firstName,
        lastName,
        isAdmin,
      })
    ).get({
      plain: true,
    });
    console.log(isAdmin);
    // res.redirect('/admin/users');
    res.status(200).json({ message: 'Пользователь успешно создан!' });
  } catch (error) {
    if (error instanceof UniqueConstraintError) {
      res
        .status(400)
        .json({ error: 'Пользователь с таким email уже существует' });
    } else {
      res.status(400).json({ error: 'Ошибка регистрации.' });
    }
  }
};

module.exports.logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email }, raw: true });
    const passwordCheck = await bcrypt.compare(password, user.password);

    if (passwordCheck) {
      req.session.user = user;

      res.status(200).json({ message: 'Добро пожаловать' });
    } else {
      res.status(401).json({ error: 'Неправильный email или пароль' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Неправильный email или пароль' });
  }
};

module.exports.logOut = (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res.redirect('/');
    } else {
      res.clearCookie('progress-bar_uuid');
    }
    res.redirect('/');
  });
};
