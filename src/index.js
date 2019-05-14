import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// INSERIDO
import { Provider } from "react-redux";
import { Store } from "./store";
// import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
// registerServiceWorker();