import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./styles/tailwind.css";
import { Provider } from "react-redux";
import CreateStore from "./Store/index";
import axios from "axios";

const store = CreateStore();
axios.defaults.baseURL = "http://localhost:8080/api/";
// http://evolveapi.herokuapp.com/v1
// const localUser = JSON.parse(GetItem());

// store.subscribe(() => {
//   const { User } = store.getState();
//   console.log("hello", User);
//   axios.defaults.headers.common["Authorization"] = User.token;
// });

// if (localUser && localUser.token != undefined) {
//   store.dispatch(Login(localUser));
// }

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
