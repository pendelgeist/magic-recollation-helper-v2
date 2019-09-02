 import * as React from 'react';
   import * as ReactDOM from 'react-dom';
   import './index.scss';
   import App from './App';
   import { BrowserRouter } from 'react-router-dom';
  
   const mountNode = document.getElementById('app');
  
   ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    mountNode,
  );
~
