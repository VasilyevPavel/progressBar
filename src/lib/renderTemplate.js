require('@babel/register');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

module.exports.renderTemplate = (
  reactElement,
  properties,
  request,
  response,
) => {
  const reactEl = React.createElement(reactElement, {
    ...properties,
    user: request.session?.user,
  });

  const html = ReactDOMServer.renderToStaticMarkup(reactEl);
  response.write('<!DOCTYPE html>');
  response.write(html);
  response.end();
};
