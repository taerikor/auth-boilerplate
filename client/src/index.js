import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./_reducers";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";

const storeWithMiddleware = applyMiddleware(
  reduxThunk,
  reduxPromise
)(createStore);

ReactDOM.render(
  <Provider
    store={storeWithMiddleware(
      rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
