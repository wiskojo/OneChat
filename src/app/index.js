import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import allReducers from "./reducers";
import startChat, {chatMiddleware} from "./chat";

import App from "./containers/app";

const createStoreWithMiddleware = applyMiddleware(chatMiddleware)(createStore);
const store = createStoreWithMiddleware(allReducers);

startChat(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
