import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { legacy_createStore as createStore,compose,applyMiddleware} from 'redux'

//import {configureStore} from "@reduxjs/toolkit"


// import { createStore,compose,applyMiddleware } from "redux";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk"

import logger from "redux-logger"



const allEnhancers = compose(
  applyMiddleware(thunk,logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


)
 

const root = ReactDOM.createRoot(document.getElementById("root"));
const myStore = createStore(userReducer, {
  userReducer:{
    name:"" ,surname:"", users:[]} }
    ,allEnhancers)
  

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
