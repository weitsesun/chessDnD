import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { observe } from './Game';

import Board from './Board';

// ReactDOM.render(<Board knightPosition = {[1, 0]}/>, document.getElementById('root'));
observe(knightPosition => ReactDOM.render(<Board knightPosition = {knightPosition}/>, document.getElementById('root')));

serviceWorker.unregister();
