const React = require('react');

module.exports = function CreateCheckList(props) {
  const { user } = props;
  return (
    <>
      {/* updateCheckListModal */}
      <div className="modal fade" id="updateCheckListModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Отредактировать шаблон</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <form id="updateCheckList">
                <div className="mb-3">
                  <label htmlFor="employName" className="form-label">
                    Сотрудник
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="employName"
                    name="employName"
                    placeholder="Имя Фамилия"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mentorName" className="form-label">
                    Ментор
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="mentorName"
                    name="mentorName"
                    placeholder="Имя Фамилия"
                  />
                </div>
                {/* 
              TODO вставить верстку анкеты ?
              */}
                <button
                  type="submit"
                  className="btn btn-success btn-green me-2"
                >
                  Сохранить
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-red"
                  id="deleteCheckList"
                >
                  Удалить
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* createCheckListModal */}
      <div className="modal fade" id="createCheckListModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Добавить шаблон</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <form id="createCheckList" data-userid={user.id}>
                <div className="mb-3">
                  <label htmlFor="employName" className="form-label">
                    Сотрудник
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="employName"
                    name="employName"
                    placeholder="Имя Фамилия"
                    defaultValue=""
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mentorName" className="form-label">
                    Ментор
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="mentorName"
                    name="mentorName"
                    placeholder="Имя Фамилия"
                    defaultValue=""
                  />
                </div>
                {/* 
              TODO вставить верстку анкеты ?
              */}
                <button
                  type="submit"
                  className="btn btn-success btn-green me-2"
                >
                  Сохранить
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* <div>
<form
  method="post"
  name="сreateCheckList"
  id="сreateCheckList"
  action="/api/admin/lists/1"
>
  <input
    type="text"
    name="employName"
    defaultValue={valueCheckList.employName}
    placeholder="Имя и Фамилия работника"
    required="Заполните поле"
  />
  <input
    type="text"
    name="mentorName"
    defaultValue={valueCheckList.mentorName}
    placeholder="Имя и Фамилия ментора"
    required="Заполните поле"
  />
  <button type="submit">Сохранить</button>
</form>
<button
  id="deleteEmployCheckList"
  data-entryid={valueCheckList.id}
  value="delete"
  type="button"
  style={{
    display: 'inline-block',
    padding: '10px 20px',
    background: 'red',
    color: 'black',
    border: '2px solid',
    textDecoration: 'none',
    marginTop: '10px',
    marginRight: '2px',
  }}
>
  delete
</button>
<a
  href="/admin/lists/:userid"
  type="button"
  style={{
    display: 'inline-block',
    padding: '10px 20px',
    background: 'white',
    color: 'black',
    border: '2px solid',
    textDecoration: 'none',
    marginTop: '10px',
  }}
>
  Вернуться назад
</a>
</div> */
}
