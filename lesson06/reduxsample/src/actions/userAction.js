export const UPDATE_USER ="USER UPDATE"
export const CREATE_USER = "USER CREATE"
export const READ_USER = "USER READ"
export const DELETE_USER = "USER DELETE"

export function UpdateUser(newUser){


    return(
        {
            type: UPDATE_USER,
            payload:{
                user: newUser
            }
        }
    )
}
export function CreateUser(newUser){


    return(
        {
            type: CREATE_USER,
            payload:{
                user: newUser
            }
        }
    )
}
export function ReadUser(newUser){


    return(
        {
            type: READ_USER,
            payload:{
                user: newUser
            }
        }
    )
}
export function DeleteUser(newUser){


    return(
        {
            type: DELETE_USER,
            payload:{
                user: newUser
            }
        }
    )
}