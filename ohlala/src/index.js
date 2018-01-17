import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/app.js';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
