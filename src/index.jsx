import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import 'assets/style.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.querySelector('#root'),
);
