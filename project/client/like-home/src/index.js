import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Counter from './components/Counter';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css'

ReactDOM.render(
    <App counter = {5} />, document.getElementById('root')
);
registerServiceWorker();
