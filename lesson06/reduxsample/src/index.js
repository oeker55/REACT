import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, } from "redux";
import { Provider } from "react-redux";
///rootReducer içine import ettiğim reducerları rootReducer'i burada import etmek suretiyle buraya eklemiş oluyorum
import rootReducer from "./reducers/rootReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));

//////---------------------Create a store with includes reducers--------------//////
//////---------------------Create store'un son parametre olarak "window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()" yazılır --------------//////
//////---------------------initial state yani başlangıç olarak state lere veri yazmak istiyorsak create store 2. parametresine yazıyoruz--------------//////

const myStore = createStore(
  rootReducer,
  {
    userReducer: "Otto",
    productReducer: [{ name: "Sony", type: "mp3 player" }],
    myReducer: "Default My Reducer",
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// console.log("old state:", myStore.getState());
//////---------------------Actions--------------//////
// const action1 = {
//   type: "Change the State",
//   payload: { newState: "my new state 1" },
// };
// const action2 = {
//   type: "Change the State",
//   payload: { newState: "my new state 2" },
// };
// const action3 = {
//   type: "User Update",
//   payload: { user: "Tommy" },
// };
// const action4 = {
//   type: "Change the State",
//   payload: { newState: "my new state 3" },
// };
//////---------------------Subscribe--------------//////
// myStore.subscribe(() => {
//   console.log("Store Updated", myStore.getState());
// });
//////---------------------Dispatch--------------//////
// myStore.dispatch(action1);
// myStore.dispatch(action2);
// myStore.dispatch(action3);
// myStore.dispatch(action4);
// console.log(myStore.getState());

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
