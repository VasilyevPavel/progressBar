const { CheckList } = require('../../db/models');
const { sidGenerator } = require('../lib/sidGenerator');

module.exports.newList = async (req, res) => {
  const randomSid = sidGenerator(5);
  try {
    const { employName, mentorName } = req.body;
    const { userId } = req.params;
    const createNameEmploy = await CheckList.create({
      employName,
      mentorName,
      userId: userId,
      sid: randomSid,
      progress: 0,
      questionInputValue: '',
    });
    const nameEmploy = createNameEmploy.get({ plain: true });
    res.status(200).json(nameEmploy);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Ошибка при созданиий опросного листа' });
  }
};

module.exports.editList = async (req, res) => {
  const { employName, mentorName } = req.body;
  const { listId } = req.params;
  try {
    const updateEmployCheckList = await CheckList.update(
      {
        employName: employName,
        mentorName: mentorName,
      },
      {
        where: { id: listId },
        returning: true,
        plain: true,
        raw: true,
      },
    );
    res.status(200).json({ employName, mentorName });
  } catch (error) {
    res
      .status(400)
      .json({ error: 'Ошибка при редактировании опросного листа' });
  }
};

module.exports.delList = async (req, res) => {
  // console.log(req.params);
  const { listId } = req.params;
  try {
    const deleteEmployCheckList = await CheckList.destroy({
      where: { id: listId },
    });
    res.status(200).json({ message: 'Опросный лист успешно удален' });
  } catch (error) {
    res.status(400).json({ error: 'Ошибка при удалении опросного листа' });
  }
};
