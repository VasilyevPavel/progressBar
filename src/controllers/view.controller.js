const { renderTemplate } = require('../lib/renderTemplate');
const Main = require('../views/pages/Main');
const CheckListPage = require('../views/pages/CheckList');
const { CheckList } = require('../../db/models');

module.exports.renderMain = (req, res) => {
  try {
    renderTemplate(Main, {}, req, res);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

module.exports.renderCheckList = async (req, res) => {
  try {
    const result = await CheckList.findOne({ where: { sid: req.params.sid } });
    const checkList = result.get({ plain: true });
    renderTemplate(CheckListPage, { checkList: checkList }, req, res);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
