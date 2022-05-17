import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postsReducer from "./postsReducer";
import userListReducer from "./userListReducer";



export default combineReducers(
    {
        userReducer,
        postsReducer,
        userListReducer
    })
    
