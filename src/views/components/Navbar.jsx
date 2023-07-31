const React = require('react');

module.exports = function Navbar(props) {
  const { user } = props;
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="/img/logo.png"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Высокая Гора
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {user ? (
              <>
                <a className="nav-link" href="/admin/lists/">
                  все листки
                </a>
                <a className="nav-link" href={`/admin/lists/${user.id}`}>
                  мои листки
                </a>
                {user.isAdmin ? (
                  <a className="nav-link" href="/admin/users">
                    пользователи
                  </a>
                ) : (
                  ''
                )}
              </>
            ) : (
              <a className="nav-link" href="/login">
                войти
              </a>
            )}

            {user ? (
              <a className="nav-link" href="/logout">
                выход
              </a>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
