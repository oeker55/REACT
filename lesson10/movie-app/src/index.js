import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from "./reducers/rootReducer"
import { legacy_createStore as createStore, compose, applyMiddleware} from 'redux'
import thunk from "redux-thunk"
import logger from "redux-logger"
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom"
import promise from "redux-promise-middleware"



////semantic-ui cdn integration---------
const semanticUiCSS = document.createElement("link")
semanticUiCSS.rel="stylesheet"
semanticUiCSS.href ="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
document.head.appendChild(semanticUiCSS)
const semanticUiJS = document.createElement("scripts")
semanticUiJS.src = "https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"
document.head.appendChild(semanticUiJS)

////-----semantic-ui cdn integration

const allEnhancers = compose(
  applyMiddleware(thunk,promise, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


const myStore = createStore(rootReducer,allEnhancers )


ReactDOM.render(
  
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={myStore}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
