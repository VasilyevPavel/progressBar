const React = require('react');
const Navbar = require('../views/components/Navbar');

module.exports = function Layout(props) {
  const { user, children } = props;
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
        <script defer src="/js/bootstrap.bundle.min.js"></script>
        <title>Высокая гора</title>
      </head>
      <body>
        <Navbar user={user} />
        <div className="container">{children}</div>
      </body>
      <div
        id="alertMessage"
        className="alert alert-primary"
        role="alert"
        style={{
          display: 'none',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        A simple primary alert—check it out!
      </div>
    </html>
  );
};
