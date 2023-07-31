const React = require('react');
const Layout = require('../Layout');

module.exports = function Main(props) {
  return (
    <Layout {...props}>
      <div
        className="content-wrapper d-flex align-items-center justify-content-center"
        style={{ minHeight: '500px' }}
      >
        <h1>
          Привет!
          <br />
          Это корпоративный портал{' '}
          <span style={{ color: '#7eb515', whiteSpace: 'nowrap' }}>
            ООО «Высокая Гора»
          </span>
          .
          <br />
          Чтобы получить доступ к сайту - обратись в департамент HR.
        </h1>
      </div>
    </Layout>
  );
};
