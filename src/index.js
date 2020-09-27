import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Sujeetavatar from './Sujeetavatar';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Sujeetavatar /> ,document.getElementById('root'));


serviceWorker.unregister();
