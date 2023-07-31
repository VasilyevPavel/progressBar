const React = require('react');
const Layout = require('../Layout');

module.exports = function SignUp(props) {
  return (
    <Layout {...props}>
      <h1>Sign up</h1>
      <form action="/api/auth/signup" method="post">
        <input
          type="text"
          name="username"
          placeholder="username"
          autoComplete="off"
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          autoComplete="off"
        />
        <button type="submit">Sign up</button>
      </form>
    </Layout>
  );
};
