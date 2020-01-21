import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Auth from './AUTH/APP/app'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './AUTH/HELPERS/store';
// import { configureFakeBackend } from './AUTH/HELPERS/fake.backend';
// configureFakeBackend();
ReactDOM.render(<Provider store={store}><Auth /></Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
