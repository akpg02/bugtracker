import React from "react";
import ReactDOM from "react-dom/client";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { Provider } from "react-redux";
import { combineReducers, configureStore, Tuple } from "@reduxjs/toolkit";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Reducers
import authReducer from "./Controllers/Redux/authSlice";
import bugReducer from "./Controllers/Redux/bugSlice";
import userReducer from "./Controllers/Redux/userSlice";

// Redux configure
const reducer = combineReducers({
  auth: authReducer,
  bugs: bugReducer,
  user: userReducer,
});

const store = configureStore({
  reducer,
  middleware: () => new Tuple(thunk, logger),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
