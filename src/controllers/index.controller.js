const { renderTemplate } = require('../lib/renderTemplate');
const Main = require('../views/pages/Main');

module.exports.renderMain = (req, res) => {
  try {
    renderTemplate(Main, {}, req, res);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

