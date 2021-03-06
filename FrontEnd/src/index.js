import React, { Suspense, lazy } from "react";
import {Provider} from 'react-redux';
import ReactDOM from "react-dom";
import "./assets/scss/dashlite.scss";
import "./assets/scss/style-email.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./Redux/Store";

const Error404Modern = lazy(() => import("./pages/error/404-modern"));
console.log(location)
ReactDOM.render(
  <React.Fragment>
    <Suspense fallback={<div />}>
    <Provider store={store}>
      <Router basename={`/`}>
        <Route render={({ location }) => (location.state && location.state.is404 ?<App /> : <App />)} />
      </Router>
    </Provider>
    </Suspense>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
