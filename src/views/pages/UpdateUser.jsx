const React = require('react');
const Layout = require('../Layout');

module.exports = function UpdateUser(props) {
  const { currentUser } = props;

  return (
    <Layout {...props}>
      <div className="create-user-form-wrapper">
        <h1>Редактировать пользователя</h1>
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <form id="updateUserForm">
              <input type="hidden" name="userId" value={currentUser.id}></input>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  autoсomplete="off"
                  defaultValue={currentUser.email}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  Имя
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  id="firstName"
                  autoсomplete="off"
                  defaultValue={currentUser.firstName}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Фамилия
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  id="lastName"
                  autoсomplete="off"
                  defaultValue={currentUser.lastName}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="isAdmin" className="form-label">
                  Роль
                </label>
                <select
                  name="isAdmin"
                  id="isAdmin"
                  className="form-select"
                  defaultValue={currentUser.isAdmin ? '1' : '0'}
                >
                  <option value="0">пользователь</option>
                  <option value="1">администратор</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Пароль
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  autoсomplete="off"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-green me-2">
                Сохранить
              </button>
              <button type="button" className="btn btn-danger btn-red">
                Удалить
              </button>
            </form>
          </div>
        </div>
      </div>
      <script defer src="/js/user.edit.js"></script>
    </Layout>
  );
};
