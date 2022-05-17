import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { legacy_createStore as createStore,compose,applyMiddleware } from "redux";
import counterReducer from "./reducers/counterReducer";


import logger from  "redux-logger"
import thunk from "redux-thunk"


const allEnhancers =
  compose(
    applyMiddleware(thunk,logger),  
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

const myStore = createStore(counterReducer, allEnhancers);
  
  


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
