import React from 'react'
import User from './User'
import { userContext } from './context/userContext'
import { useContext } from 'react'
export default function UserList({users}) {
    const contextData = useContext(userContext)
    // console.log(users, changeColor)
  return (
    <div>UserList
        {
            contextData.users.map( (user)=> <User key={user.id}  user={user}/> )
        }

    </div>
  )
}
