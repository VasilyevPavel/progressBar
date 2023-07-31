const React = require('react');
const Layout = require('../Layout');

module.exports = function SignIn(props) {
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
                  autocomplete="off"
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
                  autocomplete="off"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-green">
                Войти
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// <h1>Sign in</h1>
//   <form action="/api/auth/login" method="post">
//     <input
//       type="email"
//       name="email"
//       placeholder="email"
//       autoComplete="off"
//     />
//     <input
//       type="password"
//       name="password"
//       placeholder="password"
//       autoComplete="off"
//     />
//     <button type="submit">Sign in</button>
//   </form>
