// import { FETCH_MOVIES_GET, FETCH_MOVIES_ERROR } from "../reducers/movieReducer";
import { API_BASE } from "../config/env";

import axios from "axios";

// export function fetchMovies() {
//   return (dispatch) => {
//     axios
//       .get(`${API_BASE}/movies`)
//       .then((response) => response.data)
//       .then((data) =>
//         dispatch({
//           type: FETCH_MOVIES_GET,
//           payload: data,
//         })
//       )
//       .catch((err) =>
//         dispatch({
//           type: FETCH_MOVIES_ERROR,
//           payload: err.message,
//         })
//       );
//   };
// }

// using with promise middleware
export function fetchMovies() {
    return (dispatch) => 

       
          dispatch({
            type: "FETCH_MOVIES",
            payload:axios.get(`${API_BASE}/movies`).then((response) => response.data)
          })
      
    };
export function newMovies(title, cover) {
    return (dispatch) => 

       
          dispatch({
            type: "NEW_MOVIES",
            payload:axios.post(`${API_BASE}/movies`,{title, cover}).then((response) => response.data)
          })
      
    };
export  function  getMovie(id) {
    return  (dispatch) => 

       
          dispatch({
            type: "GET_MOVIE",
            
            payload:axios.get(`${API_BASE}/movies/${id && id !== undefined ? id : ""}`).then((response) => response.data)
          })
      
    }
    export function updateMovies(id,title, cover) {
      return (dispatch) => 
  
         
            dispatch({
              type: "UPDATE_MOVIES",
              payload:axios.put(`${API_BASE}/movies/${id}`,{title, cover}).then((response) => response.data)
            })
        
      };
      export  function  deleteMovie(id) {
        return  (dispatch) => 
    
           
              dispatch({
                type: "DELETE_MOVIE",
                
                payload:axios.delete(`${API_BASE}/movies/${id}`).then((response) => response.data.id)
              })
          
        }
   
  