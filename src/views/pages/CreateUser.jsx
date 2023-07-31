const React = require('react');
const Layout = require('../Layout');

module.exports = function CreateUser(props) {
  return (
    <Layout {...props}>
      <div className="create-user-form-wrapper">
        <h1>Добавить пользователя</h1>
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <form id="createUserForm" method="POST" action="/api/auth/register">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  autoComplete="off"
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
                  autoComplete="off"
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
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="isAdmin" className="form-label">
                  Роль
                </label>
                <select name="isAdmin" id="isAdmin" className="form-select">
                  <option value="false">пользователь</option>
                  <option value="true">администратор</option>
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
                  autoComplete="off"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-green">
                Сохранить
              </button>
            </form>
          </div>
        </div>
      </div>
      <script defer src="/js/user.edit.js"></script>
    </Layout>
  );
};
