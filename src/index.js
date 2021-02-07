import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import { Auth0Provider } from "@auth0/auth0-react";

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

// ReactDOM.render(
//   <Auth0Provider
//     domain="tutoryard.auth0.com"
//     clientId="aj10yiMucHZzPCK4m9KA8U3f0Y6rJWX4"
//     redirectUri={window.location.origin}
//   >
//     <Provider store={store}>
//       <App/>
//     </Provider>
//   </Auth0Provider>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <Auth0Provider
        domain="tutoryard.auth0.com"
        clientId="aj10yiMucHZzPCK4m9KA8U3f0Y6rJWX4"
        redirectUri={window.location.origin}
      >
        <App/>
      </Auth0Provider>
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


