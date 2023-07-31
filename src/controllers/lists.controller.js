const { CheckList } = require('../../db/models');

module.exports.editCheckList = async (req, res) => {
  // console.log(req.body.progress);
  try {
    const {
      progress,
      q1,
      q2,
      q3,
      q4,
      q5,
      q6,
      q7,
      q8,
      q9,
      q10,
      q11,
      q12,
      questionInputValue,
    } = req.body;
    const findList = await CheckList.update(
      {
        progress,
        q1,
        q2,
        q3,
        q4,
        q5,
        q6,
        q7,
        q8,
        q9,
        q10,
        q11,
        q12,
        questionInputValue,
      },
      { where: { sid: req.params.sid } },
    );
    res.status(200).json({ message: 'Опросной листа успешно отредактирован' });
  } catch (error) {
    console.log('Ошибка в editCheckList--->', error);
    res.status(400).json({ error: 'Ошибка редактирования опросного листа' });
  }
};
