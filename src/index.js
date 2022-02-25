import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';


import configureStore from '../src/store/configureStore';

import {
  HashRouter,
  BrowserRouter
} from "react-router-dom";

const store = configureStore();



// ReactDOM.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>
// , document.getElementById('root')
// );


ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
        <App/>

    </Provider>
  </HashRouter>,
  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();


// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";


