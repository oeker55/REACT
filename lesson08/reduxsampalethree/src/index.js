import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware,compose} from 'redux'
import rootReducer from './reducers/rootReducer';

import reduxPromiseMiddleware from "redux-promise-middleware"






const root = ReactDOM.createRoot(document.getElementById('root'));

const allEnhancers = compose(
  applyMiddleware(thunk, reduxPromiseMiddleware, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

   



const myStore = createStore(rootReducer, allEnhancers)
// const action1={
//   type:"ADD_USER",
//   payload:"action dispatch "

  
// }
// myStore.dispatch(action1)

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
