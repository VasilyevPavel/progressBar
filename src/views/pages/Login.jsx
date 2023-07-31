const React = require('react');
const Layout = require('../Layout');

module.exports = function Login(props) {
  return (
    <Layout {...props}>
      <div className="login-form-wrapper">
        <h1>Вход</h1>
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <form id="loginForm" action="/api/auth/login" method="post">
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
                Войти
              </button>
            </form>
          </div>
        </div>
      </div>
      <script defer src="/js/user.edit.js"></script>
    </Layout>
  );
};
