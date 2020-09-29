import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';

import Global from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <div className="ContainerApp">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
