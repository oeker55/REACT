import axios from "axios"




export  function addUser(newUser){
    return {
        type:"ADD_USER",
        payload:{name: newUser}
    }
}
export function postsFetcher(){
  
    return async dispatch=>{
        dispatch({type:"FETCH_POSTS_START"})

        try {
           const result = await  axios.get("https://jsonplaceholder.typicode.com/posts")
           const posts = result.data;
        dispatch({
            type:"FETCH_POSTS_RECEIVE",
            payload:posts
        })
            
        } catch (error) {
            dispatch({
                type:"FETCH_POSTS_ERROR",
                payload:error.message
            })
            
        }
        
        
    }
  
}
export function postsFetcherMiddleware(){
  
    return dispatch=>{
        dispatch({type:"USERS"})

        try {
           
        dispatch({
            type:"USERS",
            payload:axios.get("https://jsonplaceholder.typicode.com/users").then(res=>res.data)
        })
            
        } catch (error) {
            dispatch({
                type:"USERS",
                payload:error.message
            })
            
        }
        
        
    }
  
}


