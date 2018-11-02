import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';

import './index.css';

import App from './containers/App';

const store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
