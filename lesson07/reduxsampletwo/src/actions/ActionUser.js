import axios from "axios"

export const UPDATE_USER = "UPDATE USER"
export const GET_USER = "GET USER"
export const USER_ERROR = "USER ERROR"

export function userUpdate(user_name, user_surname) {
    
    return (
        {
            type:UPDATE_USER,
            payload:{
                name:user_name,
                surname:user_surname
            }
        }
        )
    }
    
    export function userGetter(users) {
        
        return (
            {
            type:GET_USER,
            payload:{
                users:users
            }
        }
        )
    }
    export function getUser(){
        return async dispatch =>{
            //  axios.get("https://jsonplaceholder.typicode.com/users")
            // .then(res=>res.data)
            // .then(response=>dispatch(userGetter(response.map(item=>item.name))) )
            // .catch(err=>dispatch(showError(err)))
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/users")
                dispatch(userGetter(res.data.map(item=>item.name)))
             
                
            } catch (error) {
                dispatch(showError(error))
                
            }
        }
    }
    
    export function showError(error) {
        
        return (
            {
                type:USER_ERROR,
                payload:{
                    errorMessage:error.message
                }
            }
        )
    }