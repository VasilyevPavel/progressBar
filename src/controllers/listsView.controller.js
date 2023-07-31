const { renderTemplate } = require('../lib/renderTemplate');
const AllCheckLists = require('../views/pages/AllCheckLists');
const MyCheckLists = require('../views/pages/MyCheckLists');
const { CheckList } = require('../../db/models');

module.exports.renderAllCheckLists = async (req, res) => {
  try {
    const findAllCheckList = await CheckList.findAll({
      order: [['id', 'ASC']],
      raw: true,
    });
    renderTemplate(AllCheckLists, { findAllCheckList }, req, res);
  } catch (error) {
    console.log('Ошибка в renderAllCheckLists --->', error);
    res.status(400).send(error);
  }
};

module.exports.renderMyCheckLists = async (req, res) => {
  const userId = req.session.user.id;
  try {
    const findMyCheckList = await CheckList.findAll({
      order: [['id', 'ASC']],
      where: { userId: userId },
      raw: true,
    });
    renderTemplate(MyCheckLists, { findMyCheckList }, req, res);
  } catch (error) {
    console.log('Ошибка в renderMyCheckLists --->', error);
    res.status(400).send(error);
  }
};
