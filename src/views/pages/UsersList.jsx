const React = require('react');
const Layout = require('../Layout');

module.exports = function UsersList(props) {
  const { allUsers } = props;

  return (
    <Layout {...props}>
      <div className="users-list-wrapper">
        <h1>Пользователи</h1>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <a
              href="/admin/users/create-form"
              className="btn btn-primary btn-green"
            >
              Добавить пользователя
            </a>
            {allUsers.map((user) => (
              <div className="card user" key={user.id}>
                {' '}
                {user.firstName} {user.lastName}{' '}
                <a
                  href={`/admin/users/update-form/${user.id}`}
                  className="card-edit-link position-relative"
                >
                  редактировать
                </a>
                <span>{user.isAdmin ? 'Admin' : 'User'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
