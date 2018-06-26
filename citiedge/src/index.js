import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter,BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './dev/components/app/App'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, document.getElementById('root'));
registerServiceWorker();
 