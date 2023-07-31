const { UniqueConstraintError } = require('sequelize');
const bcrypt = require('bcrypt');
const { User, CheckList } = require('../../db/models');

module.exports.edit = async (req, res) => {
  try {
    const userId = req.params.userId;
    // console.log(req.body);
    const { email, password, firstName, lastName, isAdmin } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.findByPk(userId);
    user.email = email;
    if (password.length > 0) {
      user.password = hashPassword;
    }
    user.firstName = firstName;
    user.lastName = lastName;
    user.isAdmin = isAdmin;

    await user.save();
    res.status(200).json({ message: 'Пользователь обновлен успешно.' });
  } catch (error) {
    if (error instanceof UniqueConstraintError) {
      res
        .status(400)
        .json({ error: 'Пользователь с таким email уже существует' });
    } else {
      res.status(400).json({ error: 'User signup failed.' });
    }
  }
};

module.exports.del = async (req, res) => {
  const userId = req.params.userId;
  try {
    if (req.params.userId === '1') {
      res.status(401).json({
        error:
          'Невозможно удалить данного пользователя, обратитесь к системному администратору!',
      });
    } else {
      await User.destroy({
        where: {
          id: userId,
        },
        cascade: true,
      });

      res.status(200).json({ message: 'Пользователь удален успешно.' });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'User signin failed.' });
  }
};
