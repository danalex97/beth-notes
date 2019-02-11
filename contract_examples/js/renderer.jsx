import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Main from './main.jsx';

export class Renderer {
  render(request, response) {
    let html = ReactDOMServer.renderToString(<Main />);
    response.send(html);
  }
}
